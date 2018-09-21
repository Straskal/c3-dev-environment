const inquirer = require('inquirer');
const fs = require('fs-extra');
const replace = require('replace-in-file');
const path = require('path');
const camelCase = require('camelcase');

const {
  getDirectory,
  getSdk,
  getSetupQuestions,
  getAddonTypes,
  getFileReplaceOptions
} = require('./addonFileHelpers');

inquirer
  .prompt({ type: 'list', name: 'addonType', message: 'choose addon type:', choices: getAddonTypes() })
  .then(typeAnswers => {
    const addonSetupQuestions = getSetupQuestions(typeAnswers.addonType);

    inquirer
      .prompt(addonSetupQuestions)
      .then(addonAnswers => {
        const addonInfo = Object.assign(typeAnswers, addonAnswers);
        const addonDir = getDirectory(addonInfo.addonType, addonInfo.addonName);
        if (fs.pathExistsSync(addonDir)) {
          console.warn(`${addonInfo.addonName} already exists.`);
          return;
        }
        fs.ensureDirSync(addonDir);
        fs.copySync(getSdk(addonInfo.addonType), addonDir);

        const replaceOptions = getFileReplaceOptions(addonInfo);
        try {
          replace.sync(replaceOptions);

          // Sexy hack alert
          // When we replace SingleGlobal, it also replaces a method called SetIsSingleGlobal in plugin.js.
          // Right now I am just using this hack. There are many other solutions but this is the fastest for right now.
          if (typeAnswers.addonType === 'singleGlobalPlugin') {
            replace.sync({
              files: `./addons/plugins/${addonInfo.addonName}/plugin.js`,
              from: `SetIs${camelCase(addonInfo.addonName, { pascalCase: true })}`,
              to: 'SetIsSingleGlobal'
            });
          }
        }
        catch (error) {
          console.error('Error occurred:', error);
        }
        console.log('Successfully created addon: ' + path.resolve(addonDir));
      });
  });
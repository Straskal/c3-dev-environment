const inquirer = require('inquirer');
const fs = require('fs-extra');
const replace = require('replace-in-file');
const path = require('path');
const camelCase = require('camelcase');

const {
  getSetupQuestions,
  getDirectory,
  getSdk,
  getFileReplaceOptions
} = require('./helpers');

const addonTypes = [
  'behavior',
  'singleGlobalPlugin',
  'drawingPlugin',
  'editorTextPlugin',
  'customImporterPlugin'
];

inquirer
  .prompt({ type: 'list', name: 'addonType', message: 'choose addon type', choices: addonTypes })
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

          // Sexy hack
          if (typeAnswers.addonType === 'singleGlobalPlugin'){
            replace.sync({
              files: `./addons/plugins/single-global/${addonInfo.addonName}/plugin.js`,
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
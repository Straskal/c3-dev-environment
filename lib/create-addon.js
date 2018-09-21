const inquirer = require('inquirer');
const fs = require('fs-extra');
const replace = require('replace-in-file');

const
  {
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

const createAddon = function (addonInfo) {
  console.log(addonInfo);
  const addonDir = getDirectory(addonInfo.addonType, addonInfo.addonName);
  console.log(addonDir);
  if (fs.pathExistsSync(addonDir)) {
    console.warn(`${addonInfo.addonName} already exists.`);
    return;
  }
  fs.ensureDirSync(addonDir);
  fs.copySync(getSdk(addonInfo.addonType), addonDir);

  const replaceOptions = getFileReplaceOptions(addonInfo);
  console.log(replaceOptions);
  try {
    replace.sync(replaceOptions);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

inquirer
  .prompt({ type: 'list', name: 'addonType', message: 'choose addon type', choices: addonTypes })
  .then(typeAnswers => {
    const addonSetupQuestions = getSetupQuestions(typeAnswers.addonType);

    inquirer
      .prompt(addonSetupQuestions)
      .then(addonAnswers => {
        createAddon(Object.assign(typeAnswers, addonAnswers));
      });
  });
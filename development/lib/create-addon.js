const inquirer = require('inquirer');
const fs = require('fs-extra');
const replace = require('replace-in-file');

const { getDirectory, getSdk, getFileReplaceOptions } = require('./helpers');

const addonTypes = [
  'behavior'
];

const questions = [
  { type: 'list', name: 'addonType', message: 'choose addon type', choices: addonTypes },
  { type: 'input', name: 'companyName', message: 'author or company name:' },
  { type: 'input', name: 'addonName', message: 'addon name:' },
  { type: 'input', name: 'addonDescription', message: 'addon description:' }
];

const createAddon = function (addonInfo) {
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
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

module.exports = function () {
  inquirer
    .prompt(questions)
    .then(answers => {
      createAddon(answers);
    });
}
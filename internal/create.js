const inquirer = require('inquirer');
const fsExtra = require('fs-extra');
const replace = require('replace-in-file');
const path = require('path');

const questions = require('./questions');
const { getAddonFileInfo } = require('./addonFileInfoObjects');

inquirer
    .prompt(questions)
    .then(answers => {
        let addonFileInfo = getAddonFileInfo(answers);
        if (fsExtra.pathExistsSync(addonFileInfo.dir)) {
            console.warn(`${addonFileInfo.name} already exists.`);
            return;
        }
        fsExtra.ensureDirSync(addonFileInfo.dir);
        fsExtra.copySync(addonFileInfo.sdk, addonFileInfo.dir);
        try {
            let o = addonFileInfo.getFileReplaceOptions();
            replace.sync(o);
        }
        catch (error) {
            console.error('Error occurred:', error);
        }
        console.log('Successfully created addon: ' + path.resolve(addonFileInfo.dir));
    });
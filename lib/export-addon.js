const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const fsExtra = require('fs-extra');
var zipFolder = require('zip-folder');

fsExtra.ensureDirSync('./exports');

inquirer
    .prompt({ type: 'list', name: 'type', message: 'choose type to export:', choices: [
        'behaviors',
        'plugins'
    ]})
    .then(a => {
        fs.readdir(`./addons/${a.type}/`, (err, items) => {
            const files = [];
            for (var i = 0; i < items.length; i++) {
                let filePath = `./addons/${a.type}/${items[i]}`;
                files[i] = {
                    baseName: path.basename(filePath),
                    path: filePath
                };
            }
            inquirer
                .prompt({ type: 'list', name: 'addonFile', message: 'choose addon to export:', choices: files.map(f => f.baseName) })
                .then(answer => {
                    const addonFile = files.filter(f => f.baseName === answer.addonFile)[0];
                    zipFolder(addonFile.path, `./exports/${addonFile.baseName}.c3addon`, function (err) {
                        if (err) {
                            console.log('Error occured:', err);
                        }
                        else {
                            console.log('Successfully exported .c3addon: ' + path.resolve(`./exports/${addonFile.baseName}.c3addon`));
                        }
                    });
                });
        });
    });
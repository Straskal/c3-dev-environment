const inquirer = require('inquirer');
const { createBehaviorDirectory } = require('./create-directory');

const addonTypes = [
    'behavior'
];

const questions = [
    { type: 'list', name: 'addonType', message: 'choose addon type', choices: addonTypes },
    { type: 'input', name: 'companyName', message: 'author | company name' },
    { type: 'input', name: 'addonName', message: 'addon name' }
];

module.exports = function() 
{
    inquirer
        .prompt(questions)
        .then(answers => 
            {
                switch(answers.addonType)
                {
                    case 'behavior':
                        createBehaviorDirectory(answers);
                        break;
                }
            });
}
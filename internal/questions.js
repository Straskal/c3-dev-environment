const { 
    addonTypes, 
    pluginTypes, 
    behaviorCategories, 
    pluginCategories 
} = require('./constants');

function isNullOrWhiteSpace(str) {
    return (!str || str.length === 0 || /^\s*$/.test(str))
  }

module.exports = [
    {
        type: 'list',
        name: 'type',
        message: 'choose addon type:',
        choices: Object.values(addonTypes),
    },
    {
        type: 'list',
        name: 'type',
        message: 'choose plugin type:',
        choices: Object.values(pluginTypes),
        when: answers => answers.type === addonTypes.plugin
    },
    {
        type: 'list',
        name: 'category',
        message: 'choose behavior category:',
        choices: Object.values(behaviorCategories),
        when: answers => answers.type === addonTypes.behavior
    },
    {
        type: 'list',
        name: 'category',
        message: 'choose plugin category:',
        choices: Object.values(pluginCategories),
        when: answers => Object.values(pluginTypes).includes(answers.type)
    },
    {
        type: 'input',
        name: 'author',
        message: 'enter author/company name:',
        default: 'Scirra'
    },
    {
        type: 'input',
        name: 'authorUrl',
        message: 'enter author/company website url:',
        default: 'https://www.construct.net'
    },
    {
        type: 'input',
        name: 'docUrl',
        message: 'enter documentation url:',
        default: 'https://www.construct.net'
    },
    {
        type: 'input',
        name: 'name',
        message: 'enter addon name:',
        validate: input => !isNullOrWhiteSpace(input)
    },
    {
        type: 'input',
        name: 'description',
        message: 'enter addon description:'
    }
];
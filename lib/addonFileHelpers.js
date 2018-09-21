const camelCase = require('camelcase');

const addonTypes = [
    'behavior',
    'singleGlobalPlugin',
    'drawingPlugin',
    'editorTextPlugin',
    'customImporterPlugin'
  ];

const behaviorCategories = [
    'attributes',
    'general',
    'movements',
    'other'
];

const pluginCategories = [
    'data-and-storage',
    'form-controls',
    'general',
    'input',
    'media',
    'monetisation',
    'platform-specific',
    'web',
    'other'
];

const genericAddonFiles = [
    `./addons/ADDON_TYPE/ADDON_NAME/c3runtime/actions.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/c3runtime/behavior.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/c3runtime/plugin.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/c3runtime/conditions.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/c3runtime/expressions.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/c3runtime/instance.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/c3runtime/type.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/lang/en-US.json`,
    `./addons/ADDON_TYPE/ADDON_NAME/aces.json`,
    `./addons/ADDON_TYPE/ADDON_NAME/addon.json`,
    `./addons/ADDON_TYPE/ADDON_NAME/instance.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/type.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/plugin.js`,
    `./addons/ADDON_TYPE/ADDON_NAME/behavior.js`
];

const addonFileInfoObjects = {
    behavior:
    {
        directory: './addons/behaviors/',
        exportDirectory: './exports/addons/behaviors',
        sdk: './lib/sdks/c3-behavior-sdk-v1.2',
        fileReplaceOptions:
        {
            files: genericAddonFiles,
            from: [
                /MyCompany_MyBehavior/g,
                /mycompany_mybehavior/g,
                /MyBehavior/g,
                /MyCustomBehavior/g,
                /My custom behavior/g,
                /Example custom Construct 3 behavior./g,
                /Scirra/g,
                /_CATEGORY = "general"/g
            ]
        },
        questions: [
            { type: 'list', name: 'category', message: 'behavior category:', choices: behaviorCategories },
        ]
    },
    singleGlobalPlugin:
    {
        directory: './addons/plugins/',
        sdk: './lib/sdks/singleGlobalPlugin',
        fileReplaceOptions:
        {
            files: genericAddonFiles,
            from: [
                /MyCompany_SingleGlobal/g,
                /mycompany_singleglobal/g,
                /SingleGlobal/g,
                /MyCustomPlugin/g,
                /My custom plugin/g,
                /Example custom Construct 3 plugin./g,
                /Scirra/g,
                /_CATEGORY = "general"/g
            ]
        },
        questions: [
            { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
        ]
    },
    drawingPlugin:
    {
        directory: './addons/plugins/',
        sdk: './lib/sdks/drawingPlugin',
        fileReplaceOptions:
        {
            files: genericAddonFiles,
            from: [
                /MyCompany_DrawingPlugin/g,
                /mycompany_drawingplugin/g,
                /MyDrawingPlugin/g,
                /DrawingPlugin/g,
                /My drawing plugin/g,
                /Example custom drawing Construct 3 plugin./g,
                /Scirra/g,
                /_CATEGORY = "general"/g
            ]
        },
        questions: [
            { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
        ]
    },
    editorTextPlugin:
    {
        directory: './addons/plugins/',
        sdk: './lib/sdks/editorTextPlugin',
        fileReplaceOptions:
        {
            files: genericAddonFiles,
            from: [
                /MyCompany_TextPlugin/g,
                /mycompany_textplugin/g,
                /MyTextPlugin/g,
                /TextPlugin/g,
                /My text plugin/g,
                /Example custom text drawing Construct 3 plugin./g,
                /Scirra/g,
                /_CATEGORY = "general"/g
            ]
        },
        questions: [
            { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
        ]
    },
    customImporterPlugin:
    {
        directory: './addons/plugins/',
        sdk: './lib/sdks/customImporterPlugin',
        fileReplaceOptions:
        {
            files: genericAddonFiles,
            from: [
                /MyCompany_CustomImporter/g,
                /mycompany_customimporter/g,
                /MyCustomImporter/g,
                /CustomImportPlugin/g,
                /My custom importer plugin/g,
                /Example custom Construct 3 plugin using Custom Importer API./g,
                /Scirra/g,
                /_CATEGORY = "general"/g
            ]
        },
        questions: [
            { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
        ]
    }
};

module.exports.getAddonTypes = function () {
    return addonTypes;
};

module.exports.getBehaviorCategories = function () {
    return behaviorCategories;
};

module.exports.getPluginCategories = function () {
    return pluginCategories;
};

module.exports.getAddonDevFileInfo = function (addonType) {
    return addonFileInfoObjects[addonType];
};

module.exports.getFileReplaceOptions = function (addonInfo) {
    const pcCompanyName = camelCase(addonInfo.companyName, { pascalCase: true });
    const pcAddonName = camelCase(addonInfo.addonName, { pascalCase: true });
    const addonId = `${pcCompanyName}_${pcAddonName}`;

    const o = addonFileInfoObjects[addonInfo.addonType].fileReplaceOptions;
    o.files = o.files.map(p => {
        let g = p.replace('ADDON_NAME', addonInfo.addonName);
        g = g.replace('ADDON_TYPE', addonInfo.addonType === 'behavior' ? 'behaviors' : 'plugins');
        return g;
    });

    console.log(o.files);
    o.to = [
        addonId,
        addonId.toLowerCase(),
        pcAddonName,
        pcAddonName,
        addonInfo.addonName,
        addonInfo.addonDescription,
        addonInfo.companyName,
        `_CATEGORY = "${addonInfo.category}"`
    ]
    return o;
};

const genericSetupQuestions = [
    { type: 'input', name: 'companyName', message: 'author or company name:' },
    { type: 'input', name: 'addonName', message: 'addon name:' },
    { type: 'input', name: 'addonDescription', message: 'addon description:' }
];

module.exports.getSetupQuestions = function (addonType) {
    const addonInfo = addonFileInfoObjects[addonType];
    return addonInfo.questions
        ? addonInfo.questions.concat(genericSetupQuestions)
        : genericSetupQuestions;
};

module.exports.getDirectory = function (addonType, addonName) {
    return `${addonFileInfoObjects[addonType].directory}${addonName}`;
};

module.exports.getSdk = function (addonType) {
    return addonFileInfoObjects[addonType].sdk;
};
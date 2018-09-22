const camelCase = require('camelcase');

const addonFiles = [
    `./addons/ADDON_NAME/c3runtime/actions.js`,
    `./addons/ADDON_NAME/c3runtime/behavior.js`,
    `./addons/ADDON_NAME/c3runtime/plugin.js`,
    `./addons/ADDON_NAME/c3runtime/conditions.js`,
    `./addons/ADDON_NAME/c3runtime/expressions.js`,
    `./addons/ADDON_NAME/c3runtime/instance.js`,
    `./addons/ADDON_NAME/c3runtime/type.js`,
    `./addons/ADDON_NAME/lang/en-US.json`,
    `./addons/ADDON_NAME/aces.json`,
    `./addons/ADDON_NAME/addon.json`,
    `./addons/ADDON_NAME/instance.js`,
    `./addons/ADDON_NAME/type.js`,
    `./addons/ADDON_NAME/plugin.js`,
    `./addons/ADDON_NAME/behavior.js`
];

function getFiles(addonInfo) {
    return addonFiles.map(file => file.replace('ADDON_NAME', addonInfo.fileName));
}

const addonFileInfoObjects = {
    behavior: {
        sdk: './internal/sdks/c3-behavior-sdk-v1.2',
        getFileReplaceOptions() {
            let files = getFiles(this);
            return {
                files: files,
                from: [
                    /MyCompany_MyBehavior/g,
                    /mycompany_mybehavior/g,
                    /MyBehavior/g,
                    /MyCustomBehavior/g,
                    /My custom behavior/g,
                    /Example custom Construct 3 behavior./g,
                    /Scirra/g,
                    /_CATEGORY = "general"/g,
                    /An example third-party behavior./g
                ],
                to: [
                    this.addonId,
                    this.addonId.toLowerCase(),
                    this.pcAddonName,
                    this.pcAddonName,
                    this.name,
                    this.description,
                    this.author,
                    `_CATEGORY = "${this.category}"`,
                    this.description
                ]
            }
        }
    },
    singleGlobalPlugin: {
        sdk: './internal/sdks/singleGlobalPlugin',
        getFileReplaceOptions() {
            let files = getFiles(this);
            return {
                files: files,
                from: [
                    /MyCompany_SingleGlobal/g,
                    /mycompany_singleglobal/g,
                    /SingleGlobalPlugin/g,
                    /SingleGlobal/g,
                    /MyCustomPlugin/g,
                    /My custom plugin/g,
                    /Example custom Construct 3 plugin./g,
                    /Scirra/g,
                    /_CATEGORY = "general"/g,
                    /An example third-party plugin./g,
                    `SetIs${this.pcAddonName}`,
                ],
                to: [
                    this.addonId,
                    this.addonId.toLowerCase(),
                    this.pcAddonName,
                    this.pcAddonName,
                    this.pcAddonName,
                    this.name,
                    this.description,
                    this.author,
                    `_CATEGORY = "${this.category}"`,
                    this.description,
                    'SetIsSingleGlobal',
                ]
            }
        }
    }
};

module.exports.getAddonFileInfo = function (addonInfo) {
    let addonFileInfo = addonFileInfoObjects[addonInfo.type];
    addonFileInfo.fileName = addonInfo.name.toLowerCase().split(' ').join('-');
    addonFileInfo.pcCompanyName = camelCase(addonInfo.author, { pascalCase: true });
    addonFileInfo.pcAddonName = camelCase(addonInfo.name, { pascalCase: true });
    addonFileInfo.addonId = `${addonFileInfo.pcCompanyName}_${addonFileInfo.pcAddonName}`;
    addonFileInfo.dir = `./addons/${addonFileInfo.fileName}`;

    return Object.assign(addonInfo, addonFileInfo);
}
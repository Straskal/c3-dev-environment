const camelCase = require('camelcase');

const addonDevInfo = 
{
    behavior: 
    {
        directory: './addons/behaviors/',
        sdk: './development/sdks/c3-behavior-sdk-v1.2',
        fileReplaceOptions: 
        {
            files: [
                `./addons/behaviors/ADDON_NAME/c3runtime/actions.js`,
                `./addons/behaviors/ADDON_NAME/c3runtime/behavior.js`,
                `./addons/behaviors/ADDON_NAME/c3runtime/conditions.js`,
                `./addons/behaviors/ADDON_NAME/c3runtime/expressions.js`,
                `./addons/behaviors/ADDON_NAME/c3runtime/instance.js`,
                `./addons/behaviors/ADDON_NAME/c3runtime/type.js`,
                `./addons/behaviors/ADDON_NAME/lang/en-US.json`,
                `./addons/behaviors/ADDON_NAME/aces.json`,
                `./addons/behaviors/ADDON_NAME/addon.json`,
                `./addons/behaviors/ADDON_NAME/behavior.js`,
                `./addons/behaviors/ADDON_NAME/instance.js`,
                `./addons/behaviors/ADDON_NAME/type.js`
              ],
              from: [
                /MyCompany_MyBehavior/g,
                /MyBehavior/g,
                /MyCustomBehavior/g,
                /My custom behavior/g
              ]
        }
    }
}

module.exports.getDirectory = function (addonType, addonName)
{
    return `${addonDevInfo[addonType].directory}${addonName}`;
}

module.exports.getSdk = function (addonType) 
{
    return addonDevInfo[addonType].sdk;
}

module.exports.getFileReplaceOptions = function (addonInfo) 
{
    const pcCompanyName = camelCase(addonInfo.companyName, { pascalCase: true });
    const pcAddonName = camelCase(addonInfo.addonName, { pascalCase: true });
    const addonId = `${pcCompanyName}_${pcAddonName}`;

    const o = addonDevInfo[addonInfo.addonType].fileReplaceOptions;
    o.files = o.files.map(p => p.replace('ADDON_NAME', addonInfo.addonName));
    o.to = [
        addonId,
        pcAddonName,
        pcAddonName,
        addonInfo.addonName
      ]

      return o;
}
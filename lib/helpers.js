const camelCase = require('camelcase');
const addonInfoObjects = require('./addonInfoObjects');

const genericSetupQuestions = [
    { type: 'input', name: 'companyName', message: 'author or company name:' },
    { type: 'input', name: 'addonName', message: 'addon name:' },
    { type: 'input', name: 'addonDescription', message: 'addon description:' }
];

module.exports.getSetupQuestions = function (addonType) {
    const addonInfo = addonInfoObjects[addonType];
    return addonInfo.questions
        ? addonInfo.questions.concat(genericSetupQuestions)
        : genericSetupQuestions;
};

module.exports.getDirectory = function (addonType, addonName) {
    return `${addonInfoObjects[addonType].directory}${addonName}`;
};

module.exports.getSdk = function (addonType) {
    return addonInfoObjects[addonType].sdk;
};

module.exports.getFileReplaceOptions = function (addonInfo) {
    const pcCompanyName = camelCase(addonInfo.companyName, { pascalCase: true });
    const pcAddonName = camelCase(addonInfo.addonName, { pascalCase: true });
    const addonId = `${pcCompanyName}_${pcAddonName}`;

    const o = addonInfoObjects[addonInfo.addonType].fileReplaceOptions;
    o.files = o.files.map(p => p.replace('ADDON_NAME', addonInfo.addonName));
    o.to = [
        addonId,
        pcAddonName,
        pcAddonName,
        addonInfo.addonName
    ]
    return o;
};
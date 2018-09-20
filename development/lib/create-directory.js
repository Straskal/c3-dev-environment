const fs = require('fs-extra');
const replace = require('replace-in-file');
const camelCase = require('camelcase');

module.exports.createBehaviorDirectory = function (info) {
  const addonDir = `./addons/behaviors/${info.addonName}`;

  if (fs.pathExistsSync(addonDir)) {
    console.warn(`${info.addonName} already exists.`);
    return;
  }
  fs.ensureDirSync(addonDir);
  fs.copySync('./development/sdks/c3-behavior-sdk-v1.2', addonDir);

  const pcCompanyName = camelCase(info.companyName, { pascalCase: true });
  const pcBehaviorName = camelCase(info.addonName, { pascalCase: true });
  const addonId = `${pcCompanyName}_${pcBehaviorName}`;

  const replaceOptions =
  {
    files: [
      `./${addonDir}/c3runtime/actions.js`,
      `./${addonDir}/c3runtime/behavior.js`,
      `./${addonDir}/c3runtime/conditions.js`,
      `./${addonDir}/c3runtime/expressions.js`,
      `./${addonDir}/c3runtime/instance.js`,
      `./${addonDir}/c3runtime/type.js`,
      `./${addonDir}/lang/en-US.json`,
      `./${addonDir}/aces.json`,
      `./${addonDir}/addon.json`,
      `./${addonDir}/behavior.js`,
      `./${addonDir}/instance.js`,
      `./${addonDir}/type.js`
    ],
    from: [
      /MyCompany_MyBehavior/g,
      /MyBehavior/g,
      /MyCustomBehavior/g,
      /My custom behavior/g
    ],
    to: [
      addonId,
      pcBehaviorName,
      pcBehaviorName,
      info.addonName
    ]
  };

  try {
    replace.sync(replaceOptions);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
};
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

module.exports =
    {
        behavior:
        {
            directory: './addons/behaviors/',
            exportDirectory: './exports/addons/behaviors',
            sdk: './lib/sdks/c3-behavior-sdk-v1.2',
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
            },
            questions: [
                { type: 'list', name: 'category', message: 'behavior category:', choices: behaviorCategories },
            ]
        },
        singleGlobalPlugin:
        {
            directory: './addons/plugins/single-global/',
            sdk: './lib/sdks/singleGlobalPlugin',
            fileReplaceOptions:
            {
                files: [
                    `./addons/plugins/single-global/ADDON_NAME/c3runtime/actions.js`,
                    `./addons/plugins/single-global/ADDON_NAME/c3runtime/behavior.js`,
                    `./addons/plugins/single-global/ADDON_NAME/c3runtime/conditions.js`,
                    `./addons/plugins/single-global/ADDON_NAME/c3runtime/expressions.js`,
                    `./addons/plugins/single-global/ADDON_NAME/c3runtime/instance.js`,
                    `./addons/plugins/single-global/ADDON_NAME/c3runtime/type.js`,
                    `./addons/plugins/single-global/ADDON_NAME/lang/en-US.json`,
                    `./addons/plugins/single-global/ADDON_NAME/aces.json`,
                    `./addons/plugins/single-global/ADDON_NAME/addon.json`,
                    `./addons/plugins/single-global/ADDON_NAME/plugin.js`,
                    `./addons/plugins/single-global/ADDON_NAME/instance.js`,
                    `./addons/plugins/single-global/ADDON_NAME/type.js`
                ],
                from: [
                    /MyCompany_SingleGlobal/g,
                    /SingleGlobal/g,
                    /MyCustomPlugin/g,
                    /My custom plugin/g
                ]
            },
            questions: [
                { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
            ]
        },
        drawingPlugin:
        {
            directory: './addons/plugins/drawing/',
            sdk: './lib/sdks/drawingPlugin',
            fileReplaceOptions:
            {
                files: [
                    `./addons/plugins/drawing/ADDON_NAME/c3runtime/actions.js`,
                    `./addons/plugins/drawing/ADDON_NAME/c3runtime/behavior.js`,
                    `./addons/plugins/drawing/ADDON_NAME/c3runtime/conditions.js`,
                    `./addons/plugins/drawing/ADDON_NAME/c3runtime/expressions.js`,
                    `./addons/plugins/drawing/ADDON_NAME/c3runtime/instance.js`,
                    `./addons/plugins/drawing/ADDON_NAME/c3runtime/type.js`,
                    `./addons/plugins/drawing/ADDON_NAME/lang/en-US.json`,
                    `./addons/plugins/drawing/ADDON_NAME/aces.json`,
                    `./addons/plugins/drawing/ADDON_NAME/addon.json`,
                    `./addons/plugins/drawing/ADDON_NAME/plugin.js`,
                    `./addons/plugins/drawing/ADDON_NAME/instance.js`,
                    `./addons/plugins/drawing/ADDON_NAME/type.js`
                ],
                from: [
                    /MyCompany_DrawingPlugin/g,
                    /DrawingPlugin/g,
                    /MyDrawingPlugin/g,
                    /My drawing plugin/g
                ]
            },
            questions: [
                { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
            ]
        },
        editorTextPlugin:
        {
            directory: './addons/plugins/text/',
            sdk: './lib/sdks/editorTextPlugin',
            fileReplaceOptions:
            {
                files: [
                    `./addons/plugins/text/ADDON_NAME/c3runtime/actions.js`,
                    `./addons/plugins/text/ADDON_NAME/c3runtime/behavior.js`,
                    `./addons/plugins/text/ADDON_NAME/c3runtime/conditions.js`,
                    `./addons/plugins/text/ADDON_NAME/c3runtime/expressions.js`,
                    `./addons/plugins/text/ADDON_NAME/c3runtime/instance.js`,
                    `./addons/plugins/text/ADDON_NAME/c3runtime/type.js`,
                    `./addons/plugins/text/ADDON_NAME/lang/en-US.json`,
                    `./addons/plugins/text/ADDON_NAME/aces.json`,
                    `./addons/plugins/text/ADDON_NAME/addon.json`,
                    `./addons/plugins/text/ADDON_NAME/plugin.js`,
                    `./addons/plugins/text/ADDON_NAME/instance.js`,
                    `./addons/plugins/text/ADDON_NAME/type.js`
                ],
                from: [
                    /MyCompany_TextPlugin/g,
                    /TextPlugin/g,
                    /MyTextPlugin/g,
                    /My text plugin/g
                ]
            },
            questions: [
                { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
            ]
        },
        customImporterPlugin:
        {
            directory: './addons/plugins/importer/',
            sdk: './lib/sdks/customImporterPlugin',
            fileReplaceOptions:
            {
                files: [
                    `./addons/plugins/importer/ADDON_NAME/c3runtime/actions.js`,
                    `./addons/plugins/importer/ADDON_NAME/c3runtime/behavior.js`,
                    `./addons/plugins/importer/ADDON_NAME/c3runtime/conditions.js`,
                    `./addons/plugins/importer/ADDON_NAME/c3runtime/expressions.js`,
                    `./addons/plugins/importer/ADDON_NAME/c3runtime/instance.js`,
                    `./addons/plugins/importer/ADDON_NAME/c3runtime/type.js`,
                    `./addons/plugins/importer/ADDON_NAME/lang/en-US.json`,
                    `./addons/plugins/importer/ADDON_NAME/aces.json`,
                    `./addons/plugins/importer/ADDON_NAME/addon.json`,
                    `./addons/plugins/importer/ADDON_NAME/plugin.js`,
                    `./addons/plugins/importer/ADDON_NAME/instance.js`,
                    `./addons/plugins/importer/ADDON_NAME/type.js`
                ],
                from: [
                    /MyCompany_CustomImporter/g,
                    /MyCustomImporter/g,
                    /CustomImportPlugin/g,
                    /My custom importer plugin/g
                ]
            },
            questions: [
                { type: 'list', name: 'category', message: 'plugin category:', choices: pluginCategories },
            ]
        }
    };
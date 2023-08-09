const {
  configure,
  presets
} = require("eslint-kit");

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== "production",

  presets: [
    presets.imports({
      sort: {
        newline: true
      },
      alias: {
        paths: {'@': './src', '@/shared': './src/shared', '@/pages': './src/pages'},
      }
    }),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react()
  ]
});
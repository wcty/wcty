module.exports = {
  locales: ['uk', 'en', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: '<rootDir>/apps/fe/src/common/translations/locales/{locale}/messages',
      include: [
        '<rootDir>/apps/fe/src/containers',
        '<rootDir>/apps/fe/src/components',
        '<rootDir>/apps/fe/src/pages',
      ],
      exclude: ["**/node_modules/**"]
    }
  ],
  // "compileNamespace": "cjs",
  // "extractBabelOptions": {
  //   "rootMode": "upward",
  // },
  // "rootDir": ".",
  // "runtimeConfigModule": ["@lingui/core", "i18n"],
  format: 'po'
}
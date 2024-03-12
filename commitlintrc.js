// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['app', 'widgets', 'features', 'entities', 'shared', 'pages']],
  },
};

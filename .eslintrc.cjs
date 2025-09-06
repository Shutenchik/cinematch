/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 2023, sourceType: 'module' },
    env: { browser: true, es2023: true, node: true },
    plugins: ['@typescript-eslint', 'react-hooks', 'import'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier' // должен быть последним — отключает конфликтующие правила
    ],
    settings: {
      'import/resolver': {
        typescript: true
      }
    },
    rules: {
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
  
      // Импорты — порядок и пустые строки
      'import/order': ['warn', {
        'newlines-between': 'always',
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'groups': [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']]
      }],
  
      // TS
      '@typescript-eslint/no-explicit-any': 'warn',
  
      // Прочее
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    }
  };
  
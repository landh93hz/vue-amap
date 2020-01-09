module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    // syntax
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'no-irregular-whitespace': 'error',
    'no-alert': 'error',
    'no-implied-eval': 'error',
    'no-delete-var': 'error',
    'array-callback-return': 'error',
    radix: 'error',
    eqeqeq: 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ],
    // style,
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'func-names': ['error', 'as-needed'],
    'function-paren-newline': ['error', 'consistent'],
    // indent: ['error', 2, { VariableDeclarator: 'first' }],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'line-comment-position': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    // 'one-var': ['error', 'consecutive'],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'prefer-object-spread': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      modules: true
    }
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        mocha: true
      }
    }
  ]
};

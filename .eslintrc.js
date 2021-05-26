'use strict'

module.exports = {
  extends: [
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-typescript/optional',
    '@strv/eslint-config-typescript/style',

    '@strv/eslint-config-react',
    '@strv/eslint-config-react/optional',
    '@strv/eslint-config-react/style',

    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  env: {
    'jest/globals': true,
  },
  rules: {
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      /**
       * To also support format for React components which are using `PascalCase`
       */
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
      },
      /**
       * To allow `react-table` props like `Header`, `Cell`, `Footer` which can be functions
       */
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      {
        allowNumber: true,
      },
    ],
    'id-length': ['warn', { max: 50, exceptions: ['_', 'i'] }],
    'react/jsx-max-depth': ['warn', { max: 5 }],
    'import/no-unresolved': 'warn',
    'require-unicode-regexp': 'warn',

    /**
     * Conflicts with our convention, Prettier or too harsh
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/indent': 'off',
    'import/group-exports': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'arrow-body-style': 'off',
    'import/exports-last': 'off',
    'valid-jsdoc': 'off',
    'no-nested-ternary': 'off',
    'no-undefined': 'off',
    'react/jsx-max-depth': 'off',

    /**
     * Not needed since React 17
     * @see https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    /**
     * conflict with some utils from testing-library
     */
    'no-shadow': 'off',

    /**
     * ! FIXME: weird error
     * TypeError: sourceCode.isSpaceBetween is not a function
     */
    '@typescript-eslint/comma-spacing': 'off',

    /**
     * Wait until fixed in `react-hook-form`
     *
     * @see https://github.com/react-hook-form/react-hook-form/issues/2887
     */
    '@typescript-eslint/unbound-method': 'off',

    /**
     * too harsh for demo
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}

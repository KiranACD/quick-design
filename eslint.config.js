// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable TypeScript support
  typescript: true,
  
  // Enable React support
  react: true,
  
  // Enable stylistic formatting rules
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  
  // Ignore patterns (equivalent to ignorePatterns)
  ignores: [
    'dist',
    'node_modules',
    '*.config.js'
  ]
}, {
  // Custom rules override
  rules: {
    // Your existing custom rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    'prefer-const': 'error',
    
    // These are already handled by antfu config, but explicitly set if needed
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  }
})


// module.exports = {
//     root: true,
//     env: {
//         browser: true,
//         es2020: true,
//         node: true,
//     },
//     extends: [
//         'eslint:recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:react/recommended',
//         'plugin:react-hooks/recommended',
//     ],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         ecmaFeatures: {
//             jsx: true,
//         },
//     },
//     plugins: [
//         '@typescript-eslint',
//         'react',
//         'react-hooks',
//     ],
//     rules: {
//         'react/react-in-jsx-scope': 'off',
//         'react/prop-types': 'off',
//         '@typescript-eslint/no-unused-vars':['error', {argsIgnorePattern: '^_'}],
//         '@typescript-eslint/explicit-function-return-type':'off',
//         '@typescript-eslint/explicit-module-boundary-types':'off',
//         'no-console':'warn',
//         'prefer-const':'error',
//     },
//     settings: {
//         react: {
//         version: 'detect',
//         },
//     },
//     ignorePatterns: [
//         'dist',
//         'node_modules',
//         '*.config.js',
//     ],
// }
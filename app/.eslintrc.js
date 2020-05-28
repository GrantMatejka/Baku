module.exports = {
   "plugins": [
      "react",
      "react-native",
      "sonarjs"
   ],
   'extends': ["plugin:sonarjs/recommended", "eslint:recommended", "plugin:react/recommended", "google"],
   'parser': 'babel-eslint',
   'env': {
      'jest': true,
   },
   'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'require-jsdoc': 'off',
      'react/no-children-prop': 'off',
      'react/display-name': 'off'
   },
   'globals': {
      "fetch": false
   }
}

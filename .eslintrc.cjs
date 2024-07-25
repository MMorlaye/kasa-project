module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "quotes": ["error", "single"],  // Autorise les apostrophes
    "comma-dangle": ["error", "always-multiline"],  // Autorise les virgules finales
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,  // Autorise les apostrophes dans Prettier via ESLint
        "trailingComma": "es5"  // Autorise les virgules finales dans Prettier via ESLint
      }
    ]
  }
}

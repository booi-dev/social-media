module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'react-app',
        'airbnb',
        'airbnb/hooks',
        'prettier',
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }]
    }
}

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
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
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
        "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "no-console": "off",
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'off',
        "react/require-default-props": 'off',
        "@typescript-eslint/no-explicit-any": 'off'
    }
}

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:astro/recommended",
    ],
    
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4],
        'react/react-in-jsx-scope': 'off',
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": ["*.astro"],
            "parser": "astro-eslint-parser",
            "parserOptions": {
              "parser": "@typescript-eslint/parser",
              "extraFileExtensions": [".astro"],
            },
            "rules": {
                "no-unsafe-finally": "off"
            },
          },
    ],
}

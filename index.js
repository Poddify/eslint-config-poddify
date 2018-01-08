module.exports = {
    "plugins": [
        "mocha"
    ],
    "env": {
        "mocha": true
    },
    "extends": "airbnb",
    "rules": {
        "indent": ["error", 4],
        "no-tabs": 0,
        "comma-dangle": ["error", "never"],
        "max-len": ["error", 120],
        "no-confusing-arrow": "off",
        "import/no-dynamic-require": 0,
        "import/prefer-default-export": 0,
        "global-require": 0
    }
};

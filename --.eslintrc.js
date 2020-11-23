module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-plusplus": "off",
        "max-len": ["error", 150, { "ignoreUrls": true}],
        "no-tabs": "off"
    }
};

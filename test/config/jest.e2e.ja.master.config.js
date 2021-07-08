let config = require('./jest.e2e.base.config.js');

config["globalSetup"] = "<rootDir>/test/config/global.setup.ja.master.js";

module.exports = config;

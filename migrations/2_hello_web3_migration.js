const Helloweb3 = artifacts.require("Helloweb3");

module.exports = function (deployer) {
  deployer.deploy(Helloweb3, "Welcome to our world!");
};

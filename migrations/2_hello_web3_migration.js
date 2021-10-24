const Helloweb3 = artifacts.require("Helloweb3");
const Helloweb3_2 = artifacts.require("Helloweb3_2");

module.exports = function (deployer) {
  deployer.deploy(Helloweb3, "Welcome to our world!").then( async()=>{
    let instance = await Helloweb3.deployed();
    let message = instance.message()
    return deployer.deploy(Helloweb3_2, message)
  })
};

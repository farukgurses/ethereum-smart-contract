const Helloweb3 = artifacts.require("Helloweb3");
const Helloweb3_2 = artifacts.require("Helloweb3");

contract("Helloweb3", accounts => {
    //write the tests
    it("constructor should set te message", async ()=>{
        let instance = await Helloweb3.deployed();
        let message = await instance.message();
        assert.equal(message, "Welcome to our world!")
    })

    it("owner should be accounts[0]", async ()=> {
        let instance = await Helloweb3.deployed();
        let owner = await instance.owner(); //owner should be public in contract in order to test it
        assert.equal(owner, accounts[0]);
    })

    it("second contract's message should be same with first contract's message", async ()=>{
        let instance = await Helloweb3.deployed();
        let firstMessage = await instance.message();

        let instance2 = await Helloweb3_2.deployed();
        let secondMessage = await instance2.message();

        assert.equal(firstMessage, secondMessage);
    })
})
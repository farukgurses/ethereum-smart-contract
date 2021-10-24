// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Helloweb3{
    string public message;
    address owner;

    constructor(string memory _message){
        owner = msg.sender;
        message = _message;
    }

    function hello() public view returns (string memory){
        return message;
    }

    function setMessage(string memory _message) public payable {
        require(msg.sender == owner);
        message = _message;
    }
}
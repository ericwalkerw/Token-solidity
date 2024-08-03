// Token.sol -> smart contract
// Demo smart contract

// SPDX-License-Identifier: MIT
pragma solidity <=0.8.24;
import "hardhat/console.sol";

contract Token {
    string private tokenName;
    uint private tokenCap;

    constructor(string memory _name, uint _cap){
        tokenName = _name;
        tokenCap = _cap;
    }
}
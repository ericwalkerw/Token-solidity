require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks : {
    tokentest : {
      url : process.env.PROVIDER_URL,
      accounts : [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

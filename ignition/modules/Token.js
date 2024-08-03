//Token.js -> deploy
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Demo code to deploy a token
module.exports = buildModule("TokenModule", (m) => {
  const tokenContract = m.contract("Token", ["demoToken", 1000]);
//   m.call(apollo, "launch", []);
  return { tokenContract };
});
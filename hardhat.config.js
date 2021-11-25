/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// loading the project id and mnemonic from a secrets.json file
const { alchemyApiKey, mnemonic } = require('./secrets.json');

require('@nomiclabs/hardhat-ethers')

module.exports = {
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.5",
      }
    ]
  }
};

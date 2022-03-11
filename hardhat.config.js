require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/43879396917e441fb55f94c323c27562",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/43879396917e441fb55f94c323c27562",
      accounts: [privateKey]
    }
  },
  solidity: {
  version: "0.8.4",
  setting: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
};

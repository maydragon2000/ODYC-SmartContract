require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("dotenv").config({ path: ".env" });

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.0",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                    },
                },
            },
        ],
    },
    networks: {
        hardhat: {
            forking: {
                url: process.env.ALCHEMY_RINKEBY_API_KEY_URL,
            },
        },
        rinkeby: {
            url: process.env.ALCHEMY_RINKEBY_API_KEY_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};

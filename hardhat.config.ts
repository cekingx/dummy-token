import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.RPC_SEPOLIA,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    bscTestnet: {
      url: process.env.RPC_BSC_TESTNET,
      accounts: [process.env.PRIVATE_KEY as string],
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.APIKEY_ETHERSCAN as string,
      bscTestnet: process.env.APIKEY_BSCSCAN as string
    }
  }
};

export default config;

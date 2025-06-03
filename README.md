NeighbourhoodWatch
This is a simple Ethereum smart contract project using Hardhat and Sepolia test network.

Project setup =

Install dependencies:
npm install

Create a .env file in the root folder and add your environment variables:
in your .env file =
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_wallet_private_key
Replace YOUR_INFURA_PROJECT_ID with your Infura API key and your_wallet_private_key with your Ethereum wallet private key.

Compile the contract
npx hardhat compile

Deploy the contract to Sepolia
npx hardhat run scripts/deploy.js --network sepolia

Interact with the contract
You can create scripts in the scripts folder to interact with your deployed contract.

Notes
Make sure you have Sepolia ETH in your wallet to pay for deployment gas fees. You can get Sepolia ETH from faucets.

Never share your private key publicly.

```

## License

MIT

## Author

Héctor Prado — Smart Contract Developer

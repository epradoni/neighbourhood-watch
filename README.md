# Neighbourhood Watch Token

This project is a simple Ethereum smart contract using Hardhat, written in Solidity.  
It implements a token called **Neighbourhood Watch Token (NWT)** which rewards users for reporting issues.

## Project Structure

```
neighbourhood-watch/
├── contracts/
│   └── NeighbourhoodWatchToken.sol
├── scripts/
│   └── deploy.js
├── artifacts/                # Contains ABI after compilation
├── test/
├── hardhat.config.js
├── .gitignore
├── README.md
└── package.json
```

## How to deploy the contract

1. Make sure you have Node.js and Hardhat installed.
2. Start a local blockchain:
   ```bash
   npx hardhat node
   ```
3. Deploy the contract:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```
4. Copy the deployed address shown in the terminal.

## Providing ABI and Contract Address to Frontend Team

### Contract Address

After deployment, Hardhat will log something like:

```
Contract deployed to: 0x1234...abcd
```

Send this address to the frontend team.

### ABI

After compiling (`npx hardhat compile`), find the ABI in:

```
artifacts/contracts/NeighbourhoodWatchToken.sol/NeighbourhoodWatchToken.json
```

Open the file and copy the content inside the `"abi"` field. Share this with the frontend.

## Interacting with the Contract

Launch a console:
```bash
npx hardhat console --network localhost
```

Then:
```js
const Token = await ethers.getContractFactory("NeighbourhoodWatchToken");
const token = await Token.attach("PASTE_CONTRACT_ADDRESS_HERE");

await token.reportIssue(); // Caller earns 10 tokens
(await token.balanceOf(yourAddress)).toString(); // Check balance
(await token.totalSupply()).toString(); // Total tokens issued
```

## Smart Contract Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NeighbourhoodWatchToken {
    string public name = "Neighbourhood Watch Token";
    string public symbol = "NWT";
    uint256 public totalSupply;
    address public owner;

    mapping(address => uint256) public balances;

    constructor() {
        owner = msg.sender;
    }

    function reportIssue() public {
        balances[msg.sender] += 10;
        totalSupply += 10;
    }

    function balanceOf(address _user) public view returns (uint256) {
        return balances[_user];
    }
}
```

## Deployment Script

```js
const hre = require("hardhat");

async function main() {
    const Token = await hre.ethers.getContractFactory("NeighbourhoodWatchToken");
    const token = await Token.deploy();

    await token.waitForDeployment();

    console.log(`Contract deployed to: ${token.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
```

## .gitignore

To keep your repository clean, make sure you include the following in `.gitignore`:

```
node_modules
.env
artifacts
cache
typechain
coverage
coverage.json
ignition/deployments/chain-31337
```

## License

MIT

## Author

Héctor Prado — Smart Contract Developer

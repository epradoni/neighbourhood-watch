
# NeighbourhoodWatch

A simple Ethereum smart contract project using Hardhat and the Sepolia test network.

---

## Project Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a `.env` file in the root folder with the following variables:

```
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_wallet_private_key
```

> Replace `YOUR_INFURA_PROJECT_ID` with your Infura API key and `your_wallet_private_key` with your Ethereum wallet private key.

### 3. Compile the contract

```bash
npx hardhat compile
```

### 4. Deploy the contract to Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 5. Interact with the contract

Create scripts in the `scripts` folder to interact with your deployed contract.

---

## Notes

- Make sure you have Sepolia ETH in your wallet to pay for deployment gas fees. You can get Sepolia ETH from faucets.
- **Never share your private key publicly.**

---

## License

MIT

---

## Author

**Héctor Prado + Hoi Ming+ Rosseane Camellia** — Smart Contract Developers

---

# 🏘️ Neighbourhood Watch DApp — Full Summary

### 🎯 What is it?

Neighbourhood Watch is a decentralized app (DApp) that encourages community participation. Users can:

- Report local issues
- Verify others' reports
- Earn NWT tokens (Neighbourhood Watch Token) as rewards

It’s like a helpful social network for your neighborhood, with rewards for contributing.

---

### 🧩 Technical Components

- **Smart Contracts:** Solidity (using Hardhat)  
- **Blockchain:** Ethereum Testnet (Sepolia)  
- **Frontend:** HTML, CSS, JavaScript, And Bootstrap = https://startbootstrap.com/theme/one-page-wonder 
- **Wallet:** Metamask  

---

### 🪙 NWT - Neighbourhood Watch Token

- ERC-20 token built with Solidity  
- Rewards users for positive actions on the platform  
- Displays in Metamask like any other token  
- Users need SepoliaETH only to pay gas fees  

---

### 🔐 Wallet & Blockchain

- Users must install Metamask  
- Click **Connect Wallet** to connect  
- The DApp will ask to switch to the Sepolia Testnet  
- Users can get Sepolia ETH from a free faucet if needed  

---

#### 🏠 Home

- Short explanation of how the DApp works 

#### 📍 My Neighbourhood

Three sections:

- **Report Issue:**  
  Describe problems (graffiti, trash, broken light, etc.)  
  Select location  
  Earn 10 NWT for each valid report

- **Verify Issue:**  
  See reports from other users  
  Earn 10 NWT for successful verification

- **Store:**  
  Spend NWT to buy virtual items

#### ℹ️ About
- Link to GitHub.

---

### 🧪 Sepolia Network & Faucet

- Sepolia is an Ethereum test network for development  
- No real money needed  
- Users need Sepolia ETH to pay gas fees  

---

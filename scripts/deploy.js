const hre = require("hardhat");

async function main() {
    const Token = await hre.ethers.getContractFactory("NeighbourhoodWatchToken");
    const token = await Token.deploy();

    // With ethers v6, to wait for deployment use token.waitForDeployment()
    await token.waitForDeployment();

    console.log(`Contract deployed at: ${token.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
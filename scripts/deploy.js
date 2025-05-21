const hre = require("hardhat");

async function main() {
    const Token = await hre.ethers.getContractFactory("NeighbourhoodWatchToken");
    const token = await Token.deploy();

    // Con ethers v6, para esperar el despliegue se usa token.waitForDeployment()
    await token.waitForDeployment();

    console.log(`Contrato desplegado en: ${token.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
import ABI from './NeighbourhoodWatchTokenABI.json'
assert { type: 'json' };

const contractAddress = "TU_DIRECCION_DE_CONTRATO_AQUI"; // Cambia aquí por la dirección de tu contrato

let provider;
let signer;
let contract;

async function connectWallet() {
    if (!window.ethereum) {
        alert("MetaMask no detectado. Por favor instala MetaMask.");
        return;
    }

    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();

        contract = new ethers.Contract(contractAddress, ABI, signer);

        const address = await signer.getAddress();
        document.getElementById("userAddress").innerText = address;

        // Obtener y mostrar info del token
        const name = await contract.name();
        const totalSupply = await contract.totalSupply();
        const balance = await contract.balanceOf(address);

        document.getElementById("tokenName").innerText = name;
        // Formateamos a decimal con 18 decimales (si tu token usa 18 decimales)
        document.getElementById("totalSupply").innerText = ethers.formatUnits(totalSupply, 18);
        document.getElementById("userBalance").innerText = ethers.formatUnits(balance, 18);

        document.getElementById("info").style.display = "block";

    } catch (error) {
        console.error(error);
        alert("Error al conectar la wallet");
    }
}

async function reportIssue() {
    if (!contract) {
        alert("Por favor conecta tu wallet primero.");
        return;
    }

    try {
        const tx = await contract.reportIssue();
        await tx.wait();
        alert("¡Reporte enviado! Has ganado 10 NWT.");

        // Actualizar saldo después de reportar
        const address = await signer.getAddress();
        const balance = await contract.balanceOf(address);
        document.getElementById("userBalance").innerText = ethers.formatUnits(balance, 18);

    } catch (error) {
        console.error(error);
        alert("Error al enviar reporte");
    }
}

document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("reportBtn").addEventListener("click", reportIssue);
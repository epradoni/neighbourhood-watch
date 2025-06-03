// contracts/NWTToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NWTToken is ERC20 {
    constructor() ERC20("New Web Token", "NWT") {
        _mint(msg.sender, 1000 * 10 ** decimals()); // Te da 1000 NWT al deploy
    }

    function giveMe10() external {
        _mint(msg.sender, 10 * 10 ** decimals());
    }

    function take10() external {
        require(balanceOf(msg.sender) >= 10 * 10 ** decimals(), "No tienes suficientes NWT");
        _burn(msg.sender, 10 * 10 ** decimals());
    }
}

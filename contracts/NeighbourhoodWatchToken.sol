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
        // Simulates that when someone reports an issue, they earn 10 tokens
        balances[msg.sender] += 10;
        totalSupply += 10;
    }

    function balanceOf(address _user) public view returns (uint256) {
        return balances[_user];
    }
}

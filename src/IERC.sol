// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IERC is ERC20 {
    uint initialSupply;

    constructor (uint _initialSupply) ERC20("Nisha", "Ishu") {
        initialSupply = _initialSupply;
        _mint(msg.sender, initialSupply);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "./IERC.sol";

contract tokenAirDrop {
    address public owner;
    IERC20 public token;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
    }
      

      function setAirdropToken(address _token) external onlyOwner {
        token = IERC20(_token);
      }

    function setAirDrop(address[] calldata _recipients, uint _amount) external onlyOwner {
        require(_amount > 0, "Invalid airdrop quantity");
        for (uint i = 0; i < _recipients.length; i++) {
            token.transfer(_recipients[i], _amount);

        }
    }

    function modifyAirDropQuantity(address _recipient, uint _amount) external onlyOwner {
        require(_amount >0, "Invalid airdrop quantity");
        token.transfer(_recipient, _amount);
    }
}
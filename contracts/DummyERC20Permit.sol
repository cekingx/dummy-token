// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract DummyERC20Permit is ERC20, ERC20Permit {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) ERC20Permit(symbol) {}

  function mint() external {
    _mint(msg.sender, 10 * 10 ** decimals());
  }

  function mint(uint256 amount) external {
    _mint(msg.sender, amount);
  }
}
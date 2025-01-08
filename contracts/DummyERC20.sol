// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DummyERC20 is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

  function mint() external {
    _mint(msg.sender, 10 * 10 ** decimals());
  }

  function mint(uint256 amount) external {
    _mint(msg.sender, amount);
  }
}
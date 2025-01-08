import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NAME = "StarPOINT"
const SYMBOL = "STARXP"

const DummyERC20PermitModule = buildModule("DummyERC20PermitModule", (m) => {
  const name = m.getParameter("name", NAME);
  const symbol = m.getParameter("symbol", SYMBOL);

  const erc20 = m.contract("DummyERC20Permit", [name, symbol]);

  return { erc20 };
})

export default DummyERC20PermitModule;
# Dummy Token
Project for deploying dummy token for testing like erc20, erc721 and erc1155

## Deploying
create or update deployment module in `ignition/modules`
```bash
npx hardhat ignition deploy ignition/modules/<module-name> --network <network> --deployment-id <deployment-id>
```

## Verifying
ensure api key is set correctly
```bash
npx hardhat ignition verify <deployment-id>
```
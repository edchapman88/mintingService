// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const SmartContractMint = await ethers.getContractFactory('smartContractMint');
    console.log('Deploying smartContractMint...');
    const smartContractMint = await SmartContractMint.deploy();
    await smartContractMint.deployed();
    console.log('smartContractMint deployed to:', smartContractMint.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
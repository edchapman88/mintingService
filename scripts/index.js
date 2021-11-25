// scripts/index.js
async function main () {
    
    // Retrieve accounts from the local node
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts);

    // Set up an ethers contract, representing our deployed smartContractMint
    // instance
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const SmartContractMint = await ethers.getContractFactory('smartContractMint');
    const smartContractMint = await SmartContractMint.attach(address);

    // Call the mintToken function of the deployed smartContractMint contract
    const tokenId = await smartContractMint.mintToken(owner="0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", metadataURI='https://spacedetention.files.wordpress.com/2021/10/16-e1635773315394.jpg');
    console.log('NFT tokenId is: ', tokenId);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
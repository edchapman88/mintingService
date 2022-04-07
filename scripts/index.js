// scripts/index.js
async function main () {

    // Set up an ethers contract, representing our deployed smartContractMint
    // instance

    // address of deployed contract
    const address = '0xb79d5d4D9C6aB4fc31d579024c6D78C443FFb28C';
    const SmartContractMint = await ethers.getContractFactory('smartContractMint');
    const smartContractMint = await SmartContractMint.attach(address);

    // Call the mintToken function of the deployed smartContractMint contract
    const tokenId = await smartContractMint.mintToken(owner="0xB73de51B4cACd861BA2c8dB139e8e9A2ac5cE08e", metadataURI='https://spacedetention.com/assets/metadata.json');
    console.log('NFT tokenId is: ', tokenId);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
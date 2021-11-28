// scripts/index.js
async function main () {

    // Set up an ethers contract, representing our deployed smartContractMint
    // instance

    // address of deployed contract
    const address = '0xa6286edd4c0D2Eb9F9c7010C3400A139091203cb';
    const SmartContractMint = await ethers.getContractFactory('smartContractMint');
    const smartContractMint = await SmartContractMint.attach(address);

    // Call the mintToken function of the deployed smartContractMint contract
    const tokenId = await smartContractMint.mintToken(owner="0x7d8D23485217EC8fd2E92dA148BA58a2d2b1670B", metadataURI='https://spacedetention.files.wordpress.com/2021/10/16-e1635773315394.jpg');
    console.log('NFT tokenId is: ', tokenId);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
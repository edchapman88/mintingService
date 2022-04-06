async function getNFTMetadata(contractAddress, tokenId) {

  const SmartContractMint = await ethers.getContractFactory('smartContractMint');
  const smartContractMint = await SmartContractMint.attach(contractAddress);

  const owner = await smartContractMint.ownerOf(tokenId);
  console.log(owner);

  //const metadataURI = await smartContractMint.tokenURI(tokenId)
  //const metadata = await this.getIPFSJSON(metadataURI)
  
  //console.log('metadataURI: ', metadataURI)
  //console.log('metadata: ', metadata)
  //return {metadata, metadataURI}

};
  
const contractAddress = '0xa6286edd4c0d2eb9f9c7010c3400a139091203cb';
const tokenId = '1';
  
getNFTMetadata(contractAddress, tokenId)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
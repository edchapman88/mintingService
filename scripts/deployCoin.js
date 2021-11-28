// SPDX-License-Identifier: MIT
async function main () {
  // We get the contract to deploy
  const Coin = await ethers.getContractFactory('coin');
  console.log('Deploying contract: "coin"...');
  const coin = await Coin.deploy();
  await coin.deployed();
  console.log('"coin" deployed to:', coin.address);
}
  
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
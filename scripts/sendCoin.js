async function main () {

    // Set up an ethers contract, representing our deployed smartContractMint
    // instance

    // address of deployed contract
    const address = '0x92ba4795d3664edAFf4f0A84BE86B359158C7404';
    const Coin = await ethers.getContractFactory('coin');
    const coin = await Coin.attach(address);

    // Call the mint function of the deployed coin contract
    const receiver = '0x7d8D23485217EC8fd2E92dA148BA58a2d2b1670B';
    const sendReturnObject = await coin.send(receiver, amount=500);
    console.log('send() returned object is: ', sendReturnObject);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
const Web3 = require('web3');

const web3 = new Web3('https://mainnet.infura.io/v3/PROJECT_ID');

async function getBlockNumber() {
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("Current Block Number: ", blockNumber);
}

getBlockNumber();

const Web3 = require('web3');

// 使用你的Infura项目ID
const INFURA_PROJECT_ID = 'project_id';  // 替换为你的实际Infura项目ID
const web3 = new Web3(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);

async function findFirstContractCreationBlock() {
    let blockNumber = await web3.eth.getBlockNumber(); // 获取最新的区块号

    // 从最新区块向前查找，直到找到第一个合约创建交易
    while (blockNumber >= 0) {
        let block = await web3.eth.getBlock(blockNumber, true);
        
        for (let transaction of block.transactions) {
            if (transaction.to === null) {  // 合约创建交易的收件人为null
                console.log(`Block number: ${blockNumber}`);
                console.log(`Transaction hash: ${transaction.hash}`);
                return;
            }
        }

        blockNumber--;
    }
    
    console.log("No contract creation transaction found.");
}

findFirstContractCreationBlock();

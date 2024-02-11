import axios from 'axios';
import Web3 from 'web3';

export const getABI = async (
  address: string,
  arbscanApiKey: string,
): Promise<any> => {
  const {
    data: { result },
  } = await axios.get(`https://api.arbiscan.io/api`, {
    params: {
      module: 'contract',
      action: 'getabi',
      address,
      apikey: arbscanApiKey,
    },
  });

  const abi = JSON.parse(result);

  return abi;
};

export const getContract = async (
  tokenAddress: string,
  abi: any,
  alchemyApiKey: string,
) => {
  const web3 = new Web3(
    `https://arb-mainnet.g.alchemy.com/v2/${alchemyApiKey}`,
  );

  return new web3.eth.Contract(abi, tokenAddress);
};

export const getCurrentBlockNumber = async (
  alchemyApiKey: string,
): Promise<number> => {
  const web3 = new Web3(
    `https://arb-mainnet.g.alchemy.com/v2/${alchemyApiKey}`,
  );

  const latestBlock = await web3.eth.getBlockNumber();

  return Number(latestBlock);
};

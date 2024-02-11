export default () => ({
  tokenAddress: process.env.CONTRACT_ADDRESS,
  abiAddress: process.env.ABI_CONTRACT_ADDRESS,
  alchemyApiKey: process.env.ARB_MAINNET_ALCHEMY_KEY,
  arbscanApiKey: process.env.ARBSCAN_API_KEY,
  database: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
});

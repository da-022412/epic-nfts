require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: '',
      accounts: ['YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY'],
    },
  },
};
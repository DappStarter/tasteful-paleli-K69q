require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind around hockey clock bottom gate'; 
let testAccounts = [
"0x1aa74be8252ef5a305ac99933c16edbe9a13e30061b29dbb66f92ecf44a4b293",
"0x48e66e9cbb6fe5c4addf5aa9a8008161fb1b2b8b61c6f53bf0dfcb0d717c9726",
"0x818e649ba93d02736d6a83c4deb529dcdbe4cfce3f9d621c0d7e3e10427f8931",
"0x10d7b57217e1215cdcc64f31667e4ed12df4348f810ba430c38045a93253306c",
"0x30ae5ad7352ea5415cb7a9d168ab218872e8440f6f80f8f4ac853fb5d2d6c966",
"0x41911668503e8374bdff33d5823205398e4b738038ddaaa509250c077a09bccc",
"0x93bc46ea3ca80dab85a7b61526bf668d75cf5dac2a010f3a55ec7d39327615bb",
"0x94269506019ac4ca982617963071d6a456d2183f784f60d43161dbfa3a1709fb",
"0xdccf8d764e8eecad95f0ffbb397bb1a62f731479450b5b4951c73b9c37d8a3dc",
"0x6adffde2d2ddcfbf553293461b97b1dc61f2287e31a528159f6b5635a5febaad"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



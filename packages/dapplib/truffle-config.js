require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind proof harvest glory surge since'; 
let testAccounts = [
"0x8c97d5f5c5446107410b22e2c0721a9a9dc2600fb50d3f24cd9e55964dfd4f99",
"0x69dcccfaaec2f3e16e5a48d526e445ff58f3201b01957114e1837638f7a38f29",
"0x691862c4651e2729f851668a9b3f22284720fddfbb38057d877c9a14eea49e7e",
"0xd567baec276b748c920959e9c6a094de44ebcf906034f1aeb5996d6a06838137",
"0xc3fe75a8cc8f67a2f0fe462233779d3b2f1b696eba0fde44dee3d12770e39dad",
"0x481c2dda9bad47c69b59f2b9815bb840d2eb6be0e3927dd9cf9cca3f2f2218b7",
"0xd64f72137eb622bdb2f07049a6f830ca38d8f62de1c19c577b1e2cfa422986cd",
"0xe7a124058989c2048639ef12305b19629314fe7fa909d97c1529ba7876430391",
"0x28084226142904e089b100cbcddac6daea8e2feec576d75b89a6527e8d3b83c3",
"0x4168b7fbe5824fb38a0a4e4976733879140248fff922ad73644a51bb90a700b1"
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



# PosiWeb3Provider

PosiWeb3Provider is Ethereum web3 provider used by PosiWallet.

## How to Identify PosiWeb3Provider

If Posi provider injected properly `isPosi` will be `true`.

```javascript
// In the mobile app or browser extension, 
// window.ethereum has to injected to Dapps website. 
window.ethereum = new posiwallet.Provider({
    ethereum: {
        address: "0x9d8A62f656a8d1615C1294fd71e9CFb3E4855A4F",
        chainId: 900000,
        rpcUrl: "https://api.posichain.org",
    }
});

// Then in the Dapps website, 
// you can check your website is accessed by PosiWallet's Browser:
if (window.ethereum.isPosi) {
    const web3 = new Web3(window.ethereum);
}
```

## Installation

PosiWeb3Provider is built to [dist/posi.min.js](dist/posi.min.js).

Download then pack it into mobile wallet or browser extension and inject to any Dapps website to allow communicate with
PosiWallet.

## License

PosiWeb3Provider is available under the MIT license. See the LICENSE file for more info.

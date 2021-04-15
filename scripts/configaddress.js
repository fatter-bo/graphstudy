//引用truffle-contract
//var contract = require("truffle-contract");
var ConfigAddress = artifacts.require("ConfigAddress");
module.exports = async function(callback,test) {
    let instance = await ConfigAddress.at('0x2246FD84fEF03E36b9c41bB67e088aCD29cD78e0');

    await instance.upsert(instance.address,instance.address,instance.address,instance.address,"test1");
    await instance.upsert(instance.address,instance.address,instance.address,instance.address,"test2");
    await instance.updateRouterAddress(instance.address,'0x1E660121B23c4708294b5d6a7bF1CD4Dae8ff9a6');
    console.log(await instance.getConfig('0xfA70B0bE8f9F67426BAF8Bb5E920b43b9A5A2f06'))
}


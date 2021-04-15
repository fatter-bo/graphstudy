const ConfigAddress = artifacts.require('./ConfigAddress.sol')

module.exports = async function(deployer) {
    await deployer.deploy(ConfigAddress)
    const instance = await ConfigAddress.deployed()

    console.log('ConfigAddress Contract address:', instance.address)

    var exec = require('child_process').exec;
    cmdStr = "sed -i -e   's/address.*#0x3BCC716d7F478E4eec25647f0A9098E734FF1d32/address: \"" + instance.address + "\" #0x3BCC716d7F478E4eec25647f0A9098E734FF1d32/g'  subgraph.yaml"
    exec(cmdStr, function(err,stdout,stderr){});

    //await instance.upsert(instance.address,instance.address,instance.address,instance.address,"test");
    //await instance.upsert(instance.address,instance.address,instance.address,instance.address,"test");
}

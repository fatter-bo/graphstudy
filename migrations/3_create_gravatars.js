const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async function(deployer) {
    const instance = await GravatarRegistry.deployed()

    console.log('GravatarRegistry Account address:', instance.address)

    var exec = require('child_process').exec;
    cmdStr = "sed -i -e   's/address.*#0x3fAB6FD134a657c484134e627eA46F07Fc6a05d9/address: \"" + instance.address + "\" #0x3fAB6FD134a657c484134e627eA46F07Fc6a05d9/g'  subgraph.yaml"
    exec(cmdStr, function(err,stdout,stderr){});

    let accounts = await web3.eth.getAccounts()
    await instance.createGravatar('Carl', 'https://thegraph.com/img/team/team_04.png', {
        from: accounts[0],
    })
    await instance.createGravatar('Lucas', 'https://thegraph.com/img/team/bw_Lucas.jpg', {
        from: accounts[1],
    })
}

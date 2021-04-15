//引用truffle-contract
//var contract = require("truffle-contract");
var GravatarRegistry = artifacts.require("GravatarRegistry");
module.exports = async function(callback,test) {
  let instance = await GravatarRegistry.at('0x0dFe8b86F4DB96723c342a7ED266Ef55C203eE52');

  let accounts = await web3.eth.getAccounts()
  console.log(accounts);
  console.log(await instance.getGravatar(accounts[2]));
  await instance.methods['createGravatar(string,string)'].sendTransaction('Lucas_1', 'https://thegraph.com/img/team/bw_Lucas_1.jpg', {
    from: accounts[9],
  })
  await instance.methods['updateGravatarName(string)'].sendTransaction('Carl_1_update', {
    from: accounts[9],
  })
  //await instance.methods['createGravatar(string,string)'].sendTransaction('Lucas_1', 'https://thegraph.com/img/team/bw_Lucas_1.jpg', {
  //  from: accounts[3],
  //})

}


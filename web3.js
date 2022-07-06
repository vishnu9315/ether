let Web3 = require("web3");

let web3 = new Webb(new Webb.providers.HttpProvider("HTTP://127.0.0.1:7545"));

web3.eth.getBalance("0x562c3eE8fF0F142E77F25B0E481b506d9cce5649").then(console.log);

web3.eth.getBalance("0x562c3eE8fF0F142E77F25B0E481b506d9cce5649").then(function(result){console.log(web3.utils.fromWei(result, "ether"));}); //convert ether from wei to ether.

web3.eth.sendTransaction({from: "0x562c3eE8fF0F142E77F25B0E481b506d9cce5649", to:"0xaB545a802610F0DBC4f784982402FE713810F4ad", value: web3.utils.toWei("5", "ether")}); //transfer ether..

let contract = new web3.eth.Contract(Abi, address);

// to call value from smart contract
contract.methods.x().call().then(console.log);
//to set value

contract.methods.set(50).send({from: "0x562c3eE8fF0F142E77F25B0E481b506d9cce5649"});


// compiling solidity file

solc = require("solc")

fs = require("fs");

Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let fileContent = fs.readFileSync("demo.sol").toString();
console.log(fileContent);

// create an input structure for my solidity compiler
var input = {
    language: "Solidity",
    sources: {
      "demo.sol": {
        content: fileContent,
      },
    },

    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  var output = JSON.parse(solc.compile(JSON.stringify(input)));

  console.log(output);

  ABI = output.contracts["demo.sol"]["demo"].abi;

  byteCode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;

  console.log("Abi", ABI);
  console.log("ByteCode", byteCode);

solc = require("solc")

fs = require("fs");

Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let fileContent = fs.readFileSync("demo.sol").toString();
console.log(fileContent);

// create an input structure for my solidity compiler
var input = {
    language: "Solidity",
    sources: {
      "demo.sol": {
        content: fileContent,
      },
    },
  
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  var output = JSON.parse(solc.compile(JSON.stringify(input)));

  console.log(output);

  ABI = output.contracts["demo.sol"]["demo"].abi;

  byteCode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;

  console.log("Abi", ABI);
  console.log("ByteCode", byteCode);

contract = new web3.eth.Contract(ABI);
let defaultAccount;

web3.eth.getAccounts().then((accounts) => {
        console.log("Accounts : ", accounts);

        defaultAccount = accounts[0];

        contract
        .deploy({data: byteCode})
        .send({from: defaultAccount, gas: 500000})
        .on("receipt", (receipt) =>{
            console.log("contractAddress", receipt.contractAddress)
    })
    .then((demoContract) => {
        demoContract.methods.x().call((err,data) =>{
            console.log("initial value : ", data);
        })
    })
})


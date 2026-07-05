let web3;
let account;
let insurance;

const contractAddress = "PASTE_YOUR_CONTRACT_ADDRESS_HERE";

async function loadContract() {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return;
  }

  web3 = new Web3(window.ethereum);

  await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const accounts = await web3.eth.getAccounts();
  account = accounts[0];

  const response = await fetch("abi/Insurance.json");
  const artifact = await response.json();

  insurance = new web3.eth.Contract(artifact.abi, contractAddress);

  console.log("Connected to Contract");
}

let account = "";

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask is not installed!");

    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    account = accounts[0];

    document.getElementById("connectBtn").innerHTML =
      "🟢 " + account.substring(0, 6) + "..." + account.substring(38);

    console.log("Connected:", account);
  } catch (error) {
    console.log(error);
  }
}

window.onload = function () {
  const btn = document.getElementById("connectBtn");

  if (btn) {
    btn.onclick = connectWallet;
  }
};

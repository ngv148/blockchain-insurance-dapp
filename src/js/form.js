window.onload = async function () {
  document.getElementById("policyType").value =
    localStorage.getItem("policyType");

  await loadContract();
};

document
  .getElementById("policyForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const policy = document.getElementById("policyType").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    try {
      await insurance.methods.buyPolicy(policy, name, age).send({
        from: account,
        value: web3.utils.toWei("0.01", "ether"),
      });

      alert("Policy Purchased Successfully!");

      window.location.href = "mypolicies.html";
    } catch (err) {
      console.log(err);

      alert("Transaction Failed");
    }
  });

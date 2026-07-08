# Blockchain Insurance DApp

A decentralized Blockchain Insurance DApp built using Solidity, Truffle, Ganache, MetaMask, Web3.js, HTML, CSS, and JavaScript.

The application allows users to purchase insurance policies securely through MetaMask. Policy information is stored on the blockchain, making it secure and immutable.

---

# Features

- Connect MetaMask Wallet
- Buy 20 Different Insurance Policies
- Insurance Application Form
- Ethereum Payment using MetaMask
- Unique Policy ID Generation
- View Purchased Policies
- Claim Insurance using Policy ID
- Smart Contract Integration
- Local Ethereum Blockchain using Ganache

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- Solidity
- Web3.js
- MetaMask
- Ganache
- Truffle
- Node.js

---

# Project Structure

```
insurance/
│
├── contracts/
│     Insurance.sol
│
├── migrations/
│     1_deploy_contracts.js
│
├── build/
│
├── src/
│    │
│    ├── index.html
│    ├── buy.html
│    ├── policy-form.html
│    ├── mypolicies.html
│    ├── claim.html
│    │
│    ├── css/
│    │      style.css
│    │
│    └── js/
│          app.js
│          metamask.js
│          buy.js
│          form.js
│          mypolicy.js
│          claim.js
│
├── package.json
├── truffle-config.js
└── README.md
```

---

# Prerequisites

Install the following software before running the project.

## Node.js

Download

https://nodejs.org/

---

## Ganache

Download

https://trufflesuite.com/ganache/

---

## MetaMask Extension

Chrome

https://metamask.io/

---

## Truffle

Install globally

```bash
npm install -g truffle
```

Verify

```bash
truffle version
```

---

# Installation

Clone Repository

```bash
git clone https://github.com/USERNAME/blockchain-insurance-dapp.git
```

Go to project

```bash
cd blockchain-insurance-dapp
```

Install packages

```bash
npm install
```

---

# Compile Smart Contract

```bash
truffle compile
```

---

# Deploy Smart Contract

Open Ganache first.

Then

```bash
truffle migrate --reset
```

---

# Start Website

Open VS Code Terminal

```bash
cd src
```

Run Live Server

or

Open **index.html**

Right Click

Open with Live Server

The website opens at

```
http://127.0.0.1:5500
```

---

# Configure MetaMask

## Step 1

Open MetaMask.

---

## Step 2

Click

```
Add Account or Hardware Wallet
```

Then

```
Import Account
```

---

## Step 3

Open Ganache.

Click the **Key 🔑 icon** of the first account.

Copy the **Private Key**.

**Do NOT copy the wallet address.**

---

## Step 4

Paste the Private Key into MetaMask.

Click

```
Import
```

---



## Step 5

Switch MetaMask to the Ganache Network.

You should now see approximately

```
99.99 ETH
```

---

# Running the Application

## Step 1

Start Ganache.
<img width="1919" height="1079" alt="Screenshot 2026-07-08 115502" src="https://github.com/user-attachments/assets/b2bc2c59-b49b-47bd-b6a0-c0a8e31a6e6a" />

---

## Step 2

Deploy contract

```bash
truffle migrate --reset
```

---

## Step 3

Open

```
index.html
```

using Live Server.

---

## Step 4

Click

```
Connect MetaMask
```

Approve the connection.

---

## Step 5

Click

```
Buy Insurance
```

---

## Step 6

Choose any insurance policy.

---

## Step 7

Fill the insurance application form.

Example

```
Name
Age
Gender
Phone Number
Email
Address
Aadhaar Number
Nominee Name
Policy Duration
```

---

## Step 8

Click

```
Buy Policy using MetaMask
```

---

## Step 9

MetaMask opens.

Click

```
Confirm
```

---

## Step 10

Payment Successful.

A unique Policy ID is generated.

Example

```
POL1783492428567
```

---

## Step 11

Open

```
My Policies
```

Purchased policy details appear.

---

## Step 12

Click

```
Claim
```

Enter Policy ID.

Submit claim.

---

# Workflow

```
Start Ganache
        │
        ▼
Compile Smart Contract
        │
        ▼
Deploy Contract
        │
        ▼
Open Website
        │
        ▼
Connect MetaMask
        │
        ▼
Select Insurance Policy
        │
        ▼
Fill Application Form
        │
        ▼
Confirm Payment
        │
        ▼
Policy Purchased
        │
        ▼
Policy ID Generated
        │
        ▼
View Purchased Policy
        │
        ▼
Claim Insurance
```

---

# Smart Contract Functions

```
buyPolicy()

claimPolicy()

getPolicy()

getPolicyCount()
```

---

# Sample Policy Details

| Policy | Premium |
|----------|----------|
| Health Insurance | 0.02 ETH |
| Life Insurance | 0.03 ETH |
| Car Insurance | 0.025 ETH |
| Bike Insurance | 0.01 ETH |
| Home Insurance | 0.04 ETH |
| Travel Insurance | 0.015 ETH |
| Mobile Insurance | 0.01 ETH |
| Laptop Insurance | 0.02 ETH |
| Student Insurance | 0.01 ETH |
| Cyber Insurance | 0.03 ETH |

---

# Future Enhancements

- Admin Dashboard
- Insurance Approval System
- IPFS Document Upload
- Email Notifications
- Claim Verification
- Real Ethereum Network Deployment
- Mobile Responsive Design
- QR Code Policy Verification

---

# Author

**Venkatesh N V**

MCA Student

Blockchain Insurance DApp Project

---

# License

This project is developed for educational and academic purposes.

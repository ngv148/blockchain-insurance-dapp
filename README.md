<img width="1880" height="883" alt="Screenshot 2026-07-08 120230" src="https://github.com/user-attachments/assets/7ae47413-6318-4eb1-a089-aa731bfe8693" /># Blockchain Insurance DApp

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
<img width="1880" height="883" alt="Screenshot 2026-07-08 120230" src="https://github.com/user-attachments/assets/3a721e32-5abf-496c-a073-4a2b78b41d71" />
```
index.html

```

using Live Server.

---

## Step 4

Click
<img width="553" height="822" alt="Screenshot 2026-07-08 115944" src="https://github.com/user-attachments/assets/4adba0c7-30cb-4af3-b9a3-cd23371f513a" />

```
Connect MetaMask
```

Approve the connection.

---

## Step 5

Click
<img width="1890" height="883" alt="Screenshot 2026-07-08 120242" src="https://github.com/user-attachments/assets/d7a18e8d-5714-46bc-911e-f168c5be3448" />

```
Buy Insurance
```
---

## Step 6

Choose any insurance policy.

---<img width="1890" height="883" alt="Screenshot 2026-07-08 120242" src="https://github.com/user-attachments/assets/adbb638e-9845-4463-8d02-99d229792541" />


## Step 7

Fill the insurance application form.

Example

``<img width="1882" height="890" alt="Screenshot 2026-07-08 120326" src="https://github.com/user-attachments/assets/eb51978a-9d4a-4d68-b0b5-07bc58a8bfb2" />
`
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
<img width="1887" height="892" alt="Screenshot 2026-07-08 120408" src="https://github.com/user-attachments/assets/ffabeef6-ae5c-49bb-b4ca-243ed54fe3e6" />

```
---

## Step 9

MetaMask opens.

Click

```
Confirm
<img width="1900" height="877" alt="Screenshot 2026-07-08 120436" src="https://github.com/user-attachments/assets/f2ec6e1a-887d-4370-8a9b-92f27ef9c79f" />

```

---

## Step 10

Payment Successful.

A unique Policy ID is generated.

Example

```
POL1783492428567
<img width="564" height="823" alt="Screenshot 2026-07-08 120449" src="https://github.com/user-attachments/assets/c70e2a2c-dd40-4d0c-8706-586e71b64775" />

```

---

## Step 11

Open

```
My Policies
<img width="1881" height="829" alt="image" src="https://github.com/user-attachments/assets/59037f2a-b407-44db-b59f-10b5254eae4a" />

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

# 📚 ETH BookStore - Decentralized E-Store with Stable USD Pricing

<p align="center">
  <img src="Backend/public/images/project-admin-screenshot.png" alt="Admin screen" width="400" height="700" style="margin-right: 15px;">
  <img src="Backend/public/images/project-user-screenshot.png" alt="Noraml User screen" width="400" height="700">
</p>

## About This Project

### Project Idea

A blockchain-based bookstore where users purchase books in USD but pay seamlessly in ETH.The platform automatically converts fixed USD prices to real-time ETH amounts using Chainlink Price Feeds.

### Project Description

The ETH BookStore is a decentralized e-store application built with Solidaty and Nextjs that allows users to purchase books using Ethereum (ETH) while maintaining stable USD pricing and allows the owner to seed the store and withdraw form the store balance to the his balance. The application uses Chainlink Data Feeds to convert USD prices to ETH .

## 🏗️ Backend Project Structure (Foundry)

```
Backend/
├── lib/                      # Foundry dependencies
├── src/                      # Main contracts
│   ├── BookStore.sol         # Core store logic
├── test/                     # Foundry tests
│   ├── BookStore.t.sol       # Main test suite
├── script/                   # Deployment scripts
├── foundry.toml              # Configuration
└── README.md                 # This file
```

## 🎨 Frontend Project Structure (Next.js)

```
Frontend/
├── app/             # App routes and pages
├── components/      # Reusable React components
├── config/          # Config files (e.g., contracts addresses)
├── context/         # React context (WalletProvider etc...)
├── lib/             # Utility functions and Constants
├── public/          # Static assets
```

## 🛠️ Design Patterns

### 🔗 Inheritance & Interfaces

```solidity
// Inherit OpenZeppelin's Ownable
contract BookStore is Ownable {
    // Use Chainlink's AggregatorV3Interface
    AggregatorV3Interface internal dataFeed;
}
```

### 🔒 Access Control

```solidity
// Owner-restricted functions
function addBook(...) public onlyOwner {...}
function withdraw() external onlyOwner {...}
```

### 🛢️ Optimizing Gas

#### ✅ Using Mapping

```solidity
 mapping(uint256 => Book) public books;
```

#### ✅ Using Short Descriptive Messages

```solidity
require(usdPrice > 0, "Invalid Price");
```

#### ✅ Using Storage and Memeory Keywords

```solidity
Book storage book = books[bookId];
function addBook(
        string memory _title,
        string memory _author,
        uint256 _usdPrice,
        uint256 _stock,
        string memory _imageUrl
    )
```

#### ✅ By Ordering variables

```solidity
struct Book {
        uint256 id;
        uint256 usdPrice;
        uint256 stock;
        bool exists;
        string title;
        string author;
        string imageUrl;
    }

mapping(uint256 => Book) public books;
uint256 public bookCount = 0;
```

## 🔐 Security Measures

### 🧱 Fixed Compiler Version

```solidity
pragma solidity 0.8.25;
```

### ✅ Proper Use of Require

```solidity
require(book.stock > 0, "Not In Stock");
require(book.exists, "Book Does Not Exist");
require(msg.value >= bookPriceInWei, "Not Enough Money");
```

### ✅ Use Modifiers Only for Validation

```solidity
modifier isValidPrice(uint256 price) {
    require(price > 0, "Price must be positive");
    _;
}
function addBook(...) public onlyOwner isValidPrice{...}
```

### ✅ Checks-Effects-Interactions

```solidity
 function purchaseBook(uint256 bookId) external payable {
        Book storage book = books[bookId];
        require(book.exists, "Book does not exist");
        require(book.stock > 0, "Not in stock");

        uint256  bookPriceInWei = usdToWei(book.usdPrice);
        require(msg.value >= bookPriceInWei, "Not enough money");

        books[bookId].stock--;
        emit BookPurchased(msg.sender, bookId, msg.value, book.usdPrice, book.stock);
    }
```

## 🔗 Important Links & Addresses

### 📑 Contract Address

```
0xf117Cc4D252D9D8ba0c3B0Ac3CD1FB397C4d2080
```

### 📜 Verified Contract (Scroll Sepolia)

[Scrollscan - Contract](https://sepolia.scrollscan.com/address/0xf117Cc4D252D9D8ba0c3B0Ac3CD1FB397C4d2080)

### 🌐 Frontend Hosted Dapp Link

[https://eth-book-store.vercel.app/](https://eth-book-store.vercel.app/)

## 🚀 Quick Start

### Prerequisites

- [Foundry](https://getfoundry.sh) (for Backend)
- Node.js (for Frontend)

### Installation

```bash
cd Backend && forge install
cd Frontend && npm install
```

## 🧪 Testing

### 💠 Backend Test

```bash
cd Backend
forge test

```

## 🚀 How to Run the Program

### 🎨 Frontend

```bash
cd Frontend
npm install
npm run dev
```

### 📍 Environment Variables

Create a `.env` file in the `Frontend/` directory and `add` `NEXT_PUBLIC_PROJECT_ID `variable :

```env
NEXT_PUBLIC_PROJECT_ID=57e1f5e0adb6153508d54bf659d3ddee
```

---

## 📹 Demo

[![Demo Video](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://youtu.be/VIDEO_ID)

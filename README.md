# 📚 ETH BookStore - Decentralized Simple E-Store with Stable USD Pricing

![Project Banner](https://via.placeholder.com/1200x400?text=ETH+BookStore+DApp)

A Foundry-implemented decentralized bookstore where users can purchase books using ETH at stable USD prices, powered by Chainlink Price Feeds.

## About This Project

### Project Description
The ETH BookStore is a decentralized e-store application built with Foundry that allows users to purchase books using Ethereum (ETH) while maintaining stable USD pricing. The system uses Chainlink Data Feeds to convert USD prices to ETH .

## 🏗️ Project Structure (Foundry)

```
eth-bookstore/
├── lib/                      # Foundry dependencies
├── src/                      # Main contracts
│   ├── BookStore.sol         # Core store logic
├── test/                     # Foundry tests
│   ├── BookStore.t.sol       # Main test suite
├── script/                   # Deployment scripts
├── foundry.toml              # Configuration
└── README.md                 # This file
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

## 🔐 Security Measures

### 🧱 Fixed Compiler Version

```solidity
pragma solidity 0.8.25; // No floating pragma
```

### ✅ Comprehensive Input Validation

```solidity
require(book.exists, "Book does not exist");
require(book.stock > 0, "Out of stock");
require(usdPrice > 0, "Invalid price");

```


### 📑 Contract Information (Scroll Sepolia)
| Contract  | Address |
|-----------|---------|
| **BookStore** | [`0xE4b5CcCB717a34314EA4Ffb8CEcf72D49635ce8C`](https://sepolia.scrollscan.com/address/0xE4b5CcCB717a34314EA4Ffb8CEcf72D49635ce8C) |

### 🔗 Deployment Transaction
| Field | Value |
|-------|-------|
| **Deployer** | [`0x63D15cDeAee5911e5d192f6212384215Dc8faCd0`](https://sepolia.scrollscan.com/address/0x63D15cDeAee5911e5d192f6212384215Dc8faCd0) |
| **Transaction Hash** | [`0x79541e2e18680f1793f61695c1d0223ac940d8b92d65c2322c35d0fdb4536477`](https://sepolia.scrollscan.com/tx/0x79541e2e18680f1793f61695c1d0223ac940d8b92d65c2322c35d0fdb4536477) |



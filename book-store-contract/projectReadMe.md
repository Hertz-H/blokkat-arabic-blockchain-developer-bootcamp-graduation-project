contract transaction created block Hash:
0x79541e2e18680f1793f61695c1d0223ac940d8b92d65c2322c35d0fdb4536477
Deployer: 0x63D15cDeAee5911e5d192f6212384215Dc8faCd0
Deployed to: 0xE4b5CcCB717a34314EA4Ffb8CEcf72D49635ce8C
Transaction hash: 0x79541e2e18680f1793f61695c1d0223ac940d8b92d65c2322c35d0fdb4536477
ABI: [
{
"type": "constructor",
"inputs": [],
"stateMutability": "nonpayable"
},
{
"type": "function",
"name": "addBook",
"inputs": [
{
"name": "_title",
"type": "string",
"internalType": "string"
},
{
"name": "_author",
"type": "string",
"internalType": "string"
},
{
"name": "_usdPrice",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "_stock",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "_imageUrl",
"type": "string",
"internalType": "string"
}
],
"outputs": [],
"stateMutability": "nonpayable"
},
{
"type": "function",
"name": "bookCount",
"inputs": [],
"outputs": [
{
"name": "",
"type": "uint256",
"internalType": "uint256"
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "books",
"inputs": [
{
"name": "",
"type": "uint256",
"internalType": "uint256"
}
],
"outputs": [
{
"name": "id",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "usdPrice",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "stock",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "title",
"type": "string",
"internalType": "string"
},
{
"name": "author",
"type": "string",
"internalType": "string"
},
{
"name": "exists",
"type": "bool",
"internalType": "bool"
},
{
"name": "imageUrl",
"type": "string",
"internalType": "string"
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "getAllBooks",
"inputs": [],
"outputs": [
{
"name": "",
"type": "tuple[]",
"internalType": "struct BookStore.Book[]",
"components": [
{
"name": "id",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "usdPrice",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "stock",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "title",
"type": "string",
"internalType": "string"
},
{
"name": "author",
"type": "string",
"internalType": "string"
},
{
"name": "exists",
"type": "bool",
"internalType": "bool"
},
{
"name": "imageUrl",
"type": "string",
"internalType": "string"
}
]
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "getBalance",
"inputs": [
{
"name": "accountAddress",
"type": "address",
"internalType": "address"
}
],
"outputs": [
{
"name": "",
"type": "uint256",
"internalType": "uint256"
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "getContractBalance",
"inputs": [],
"outputs": [
{
"name": "",
"type": "uint256",
"internalType": "uint256"
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "getEthUsdPrice",
"inputs": [],
"outputs": [
{
"name": "",
"type": "int256",
"internalType": "int256"
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "owner",
"inputs": [],
"outputs": [
{
"name": "",
"type": "address",
"internalType": "address"
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "purchaseBook",
"inputs": [
{
"name": "bookId",
"type": "uint256",
"internalType": "uint256"
}
],
"outputs": [],
"stateMutability": "payable"
},
{
"type": "function",
"name": "renounceOwnership",
"inputs": [],
"outputs": [],
"stateMutability": "nonpayable"
},
{
"type": "function",
"name": "seedBooks",
"inputs": [],
"outputs": [],
"stateMutability": "nonpayable"
},
{
"type": "function",
"name": "show",
"inputs": [
{
"name": "id",
"type": "uint256",
"internalType": "uint256"
}
],
"outputs": [
{
"name": "",
"type": "tuple",
"internalType": "struct BookStore.Book",
"components": [
{
"name": "id",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "usdPrice",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "stock",
"type": "uint256",
"internalType": "uint256"
},
{
"name": "title",
"type": "string",
"internalType": "string"
},
{
"name": "author",
"type": "string",
"internalType": "string"
},
{
"name": "exists",
"type": "bool",
"internalType": "bool"
},
{
"name": "imageUrl",
"type": "string",
"internalType": "string"
}
]
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "transferOwnership",
"inputs": [
{
"name": "newOwner",
"type": "address",
"internalType": "address"
}
],
"outputs": [],
"stateMutability": "nonpayable"
},
{
"type": "function",
"name": "usdToWei",
"inputs": [
{
"name": "usdCents",
"type": "uint256",
"internalType": "uint256"
}
],
"outputs": [
{
"name": "",
"type": "uint256",
"internalType": "uint256"
}
],
"stateMutability": "view"
},
{
"type": "function",
"name": "withdraw",
"inputs": [],
"outputs": [],
"stateMutability": "nonpayable"
},
{
"type": "event",
"name": "BookPurchased",
"inputs": [
{
"name": "buyer",
"type": "address",
"indexed": true,
"internalType": "address"
},
{
"name": "bookId",
"type": "uint256",
"indexed": true,
"internalType": "uint256"
},
{
"name": "ethPaid",
"type": "uint256",
"indexed": false,
"internalType": "uint256"
},
{
"name": "usdPrice",
"type": "uint256",
"indexed": false,
"internalType": "uint256"
},
{
"name": "newStock",
"type": "uint256",
"indexed": false,
"internalType": "uint256"
}
],
"anonymous": false
},
{
"type": "event",
"name": "OwnershipTransferred",
"inputs": [
{
"name": "previousOwner",
"type": "address",
"indexed": true,
"internalType": "address"
},
{
"name": "newOwner",
"type": "address",
"indexed": true,
"internalType": "address"
}
],
"anonymous": false
},
{
"type": "error",
"name": "OwnableInvalidOwner",
"inputs": [
{
"name": "owner",
"type": "address",
"internalType": "address"
}
]
},
{
"type": "error",
"name": "OwnableUnauthorizedAccount",
"inputs": [
{
"name": "account",
"type": "address",
"internalType": "address"
}
]
}
]

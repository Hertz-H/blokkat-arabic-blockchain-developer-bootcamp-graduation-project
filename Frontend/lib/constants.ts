export const CONTRACT_ADDRESS: `0x${string}` =
  "0xf117Cc4D252D9D8ba0c3B0Ac3CD1FB397C4d2080";
// "0x5b0703168820269beE59696C8ceE08d505c5f36F";
// "0x37213ea8814a994b9dd7d085c70c69c99fba0fe2";

export const CONTRACT_ABI = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addBook",
    inputs: [
      {
        name: "_title",
        type: "string",
        internalType: "string",
      },
      {
        name: "_author",
        type: "string",
        internalType: "string",
      },
      {
        name: "_usdPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_stock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_imageUrl",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "bookCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "books",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "usdPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "stock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "exists",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "title",
        type: "string",
        internalType: "string",
      },
      {
        name: "author",
        type: "string",
        internalType: "string",
      },
      {
        name: "imageUrl",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllBooks",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct BookStore4.Book[]",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "usdPrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "stock",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "exists",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "title",
            type: "string",
            internalType: "string",
          },
          {
            name: "author",
            type: "string",
            internalType: "string",
          },
          {
            name: "imageUrl",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBalance",
    inputs: [
      {
        name: "accountAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getContractBalance",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getEthUsdPrice",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "purchaseBook",
    inputs: [
      {
        name: "bookId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "seedBooks",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "show",
    inputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct BookStore4.Book",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "usdPrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "stock",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "exists",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "title",
            type: "string",
            internalType: "string",
          },
          {
            name: "author",
            type: "string",
            internalType: "string",
          },
          {
            name: "imageUrl",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "usdToWei",
    inputs: [
      {
        name: "usdCents",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "BalanceWithdrow",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "balance",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BookPurchased",
    inputs: [
      {
        name: "buyer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "bookId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "ethPaid",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "usdPrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newStock",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
];
// [
//   {
//     type: "constructor",
//     inputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "addBook",
//     inputs: [
//       {
//         name: "_title",
//         type: "string",
//         internalType: "string",
//       },
//       {
//         name: "_author",
//         type: "string",
//         internalType: "string",
//       },
//       {
//         name: "_usdPrice",
//         type: "uint256",
//         internalType: "uint256",
//       },
//       {
//         name: "_stock",
//         type: "uint256",
//         internalType: "uint256",
//       },
//       {
//         name: "_imageUrl",
//         type: "string",
//         internalType: "string",
//       },
//     ],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "bookCount",
//     inputs: [],
//     outputs: [
//       {
//         name: "",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "books",
//     inputs: [
//       {
//         name: "",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     outputs: [
//       {
//         name: "id",
//         type: "uint256",
//         internalType: "uint256",
//       },
//       {
//         name: "usdPrice",
//         type: "uint256",
//         internalType: "uint256",
//       },
//       {
//         name: "stock",
//         type: "uint256",
//         internalType: "uint256",
//       },
//       {
//         name: "exists",
//         type: "bool",
//         internalType: "bool",
//       },
//       {
//         name: "title",
//         type: "string",
//         internalType: "string",
//       },
//       {
//         name: "author",
//         type: "string",
//         internalType: "string",
//       },
//       {
//         name: "imageUrl",
//         type: "string",
//         internalType: "string",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "getAllBooks",
//     inputs: [],
//     outputs: [
//       {
//         name: "",
//         type: "tuple[]",
//         internalType: "struct BookStore3.Book[]",
//         components: [
//           {
//             name: "id",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "usdPrice",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "stock",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "exists",
//             type: "bool",
//             internalType: "bool",
//           },
//           {
//             name: "title",
//             type: "string",
//             internalType: "string",
//           },
//           {
//             name: "author",
//             type: "string",
//             internalType: "string",
//           },
//           {
//             name: "imageUrl",
//             type: "string",
//             internalType: "string",
//           },
//         ],
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "getBalance",
//     inputs: [
//       {
//         name: "accountAddress",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//     outputs: [
//       {
//         name: "",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "getContractBalance",
//     inputs: [],
//     outputs: [
//       {
//         name: "",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "getEthUsdPrice",
//     inputs: [],
//     outputs: [
//       {
//         name: "",
//         type: "int256",
//         internalType: "int256",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "owner",
//     inputs: [],
//     outputs: [
//       {
//         name: "",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "purchaseBook",
//     inputs: [
//       {
//         name: "bookId",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     outputs: [],
//     stateMutability: "payable",
//   },
//   {
//     type: "function",
//     name: "renounceOwnership",
//     inputs: [],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "seedBooks",
//     inputs: [],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "show",
//     inputs: [
//       {
//         name: "id",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     outputs: [
//       {
//         name: "",
//         type: "tuple",
//         internalType: "struct BookStore3.Book",
//         components: [
//           {
//             name: "id",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "usdPrice",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "stock",
//             type: "uint256",
//             internalType: "uint256",
//           },
//           {
//             name: "exists",
//             type: "bool",
//             internalType: "bool",
//           },
//           {
//             name: "title",
//             type: "string",
//             internalType: "string",
//           },
//           {
//             name: "author",
//             type: "string",
//             internalType: "string",
//           },
//           {
//             name: "imageUrl",
//             type: "string",
//             internalType: "string",
//           },
//         ],
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "transferOwnership",
//     inputs: [
//       {
//         name: "newOwner",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "function",
//     name: "usdToWei",
//     inputs: [
//       {
//         name: "usdCents",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     outputs: [
//       {
//         name: "",
//         type: "uint256",
//         internalType: "uint256",
//       },
//     ],
//     stateMutability: "view",
//   },
//   {
//     type: "function",
//     name: "withdraw",
//     inputs: [],
//     outputs: [],
//     stateMutability: "nonpayable",
//   },
//   {
//     type: "event",
//     name: "BalanceWithdrow",
//     inputs: [
//       {
//         name: "owner",
//         type: "address",
//         indexed: true,
//         internalType: "address",
//       },
//       {
//         name: "balance",
//         type: "uint256",
//         indexed: false,
//         internalType: "uint256",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "event",
//     name: "BookPurchased",
//     inputs: [
//       {
//         name: "buyer",
//         type: "address",
//         indexed: true,
//         internalType: "address",
//       },
//       {
//         name: "bookId",
//         type: "uint256",
//         indexed: true,
//         internalType: "uint256",
//       },
//       {
//         name: "ethPaid",
//         type: "uint256",
//         indexed: false,
//         internalType: "uint256",
//       },
//       {
//         name: "usdPrice",
//         type: "uint256",
//         indexed: false,
//         internalType: "uint256",
//       },
//       {
//         name: "newStock",
//         type: "uint256",
//         indexed: false,
//         internalType: "uint256",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "event",
//     name: "OwnershipTransferred",
//     inputs: [
//       {
//         name: "previousOwner",
//         type: "address",
//         indexed: true,
//         internalType: "address",
//       },
//       {
//         name: "newOwner",
//         type: "address",
//         indexed: true,
//         internalType: "address",
//       },
//     ],
//     anonymous: false,
//   },
//   {
//     type: "error",
//     name: "OwnableInvalidOwner",
//     inputs: [
//       {
//         name: "owner",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//   },
//   {
//     type: "error",
//     name: "OwnableUnauthorizedAccount",
//     inputs: [
//       {
//         name: "account",
//         type: "address",
//         internalType: "address",
//       },
//     ],
//   },
// ];
// export const CONTRACT_ABI = [
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_AggregatorFeedAddress",
//         type: "address",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//     ],
//     name: "OwnableInvalidOwner",
//     type: "error",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "OwnableUnauthorizedAccount",
//     type: "error",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "buyer",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "bookId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "ethPaid",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "usdPrice",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "newStock",
//         type: "uint256",
//       },
//     ],
//     name: "BookPurchased",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_title",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_author",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "_usdPrice",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_stock",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "_imageUrl",
//         type: "string",
//       },
//     ],
//     name: "addBook",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "bookCount",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "books",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "usdPrice",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "stock",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "title",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "author",
//         type: "string",
//       },
//       {
//         internalType: "bool",
//         name: "exists",
//         type: "bool",
//       },
//       {
//         internalType: "string",
//         name: "imageUrl",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getAllBooks",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "uint256",
//             name: "id",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "usdPrice",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "stock",
//             type: "uint256",
//           },
//           {
//             internalType: "string",
//             name: "title",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "author",
//             type: "string",
//           },
//           {
//             internalType: "bool",
//             name: "exists",
//             type: "bool",
//           },
//           {
//             internalType: "string",
//             name: "imageUrl",
//             type: "string",
//           },
//         ],
//         internalType: "struct BookStore.Book[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "accountAddress",
//         type: "address",
//       },
//     ],
//     name: "getBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getContractBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getEthUsdPrice",
//     outputs: [
//       {
//         internalType: "int256",
//         name: "",
//         type: "int256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "bookId",
//         type: "uint256",
//       },
//     ],
//     name: "purchaseBook",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "seedBooks",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//     ],
//     name: "show",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "uint256",
//             name: "id",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "usdPrice",
//             type: "uint256",
//           },
//           {
//             internalType: "uint256",
//             name: "stock",
//             type: "uint256",
//           },
//           {
//             internalType: "string",
//             name: "title",
//             type: "string",
//           },
//           {
//             internalType: "string",
//             name: "author",
//             type: "string",
//           },
//           {
//             internalType: "bool",
//             name: "exists",
//             type: "bool",
//           },
//           {
//             internalType: "string",
//             name: "imageUrl",
//             type: "string",
//           },
//         ],
//         internalType: "struct BookStore.Book",
//         name: "",
//         type: "tuple",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "usdCents",
//         type: "uint256",
//       },
//     ],
//     name: "usdToWei",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "withdraw",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

export const contractAddress = "0x9591E5DC5887013dc6a6B6e975a6D9A02BF2A14a";

export const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tweetId",
          "type": "uint256"
        }
      ],
      "name": "AddTweet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tweetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isDeleted",
          "type": "bool"
        }
      ],
      "name": "DeleteTweet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tweetText",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isDeleted",
          "type": "bool"
        }
      ],
      "name": "addTweet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tweetId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isDeleted",
          "type": "bool"
        }
      ],
      "name": "deleteTweet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllTweets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "username",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "tweetText",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isDeleted",
              "type": "bool"
            }
          ],
          "internalType": "struct Twitter.Tweet[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyTweets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "username",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "tweetText",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isDeleted",
              "type": "bool"
            }
          ],
          "internalType": "struct Twitter.Tweet[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sampleNum",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tweetToOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tweets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "username",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "tweetText",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isDeleted",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
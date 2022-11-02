import { Edge, Node, Position } from "reactflow";
import dagre from "dagre";

export const dataNodes: DataNode[] = [
  {
    id: 1,
    title: "Challenge 0 🎨 Simple NFT",
    overview: "Create a simple NFT to learn basics of scaffold-eth.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://speedrunethereum.com/challenge/simple-nft-example",
    image: "https://speedrunethereum.com/assets/0.png",
    dependencies: [2],
  },
  {
    id: 2,
    title: "Challenge 1 🥩 Staking App",
    overview: "Create a decentralized application where users can coordinate a group funding effort.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://speedrunethereum.com/challenge/decentralized-staking",
    image: "https://speedrunethereum.com/assets/1.png",
    dependencies: [3],
  },
  {
    id: 3,
    title: "Challenge 2 🪙 Token Vendor",
    overview: "Create a decentralized, digital currency with a vending machine to buy and sell your tokens.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://speedrunethereum.com/challenge/token-vendor",
    image: "https://speedrunethereum.com/assets/2.png",
    dependencies: [4],
  },
  {
    id: 4,
    title: "Challenge 3 🎲 Dice Game",
    overview: "Hack a Dice Game contract by predicting the randomness on chain",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://speedrunethereum.com/challenge/dice-game",
    image: "https://speedrunethereum.com/assets/dice.png",
    dependencies: [5, 6, 7, 8, 9, 13, 18, 41, 44, 47, 51, 58, 59, 60],
  },
  {
    id: 5,
    title: "Smart Wallet",
    overview: "Build your own simple smart contract wallet that can setName on ENS",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [33, 34, 35],
  },
  {
    id: 6,
    title: "NFT Price Curve",
    overview: "Build an NFT where the minting price follows a price curve.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [10],
  },
  {
    id: 7,
    title: "ERC20 Tokens",
    overview: "Build a simple ERC20 app.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [11],
  },
  {
    id: 8,
    title: "DEX Challenge",
    overview: "Build a decentralized exchange.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://t.me/+_NeUIJ664Tc1MzIx",
    image: "https://speedrunethereum.com/assets/4.png",
    dependencies: [12, 26, 36],
  },
  {
    id: 9,
    title: "CRON Job Challenge",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [39, 40],
  },
  {
    id: 10,
    title: "SVG NFTs",
    overview: "Create NFTs using on-chain SVG code.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://t.me/+J9PRea84c1U0Mzkx",
    image: "https://speedrunethereum.com/assets/nfts.png",
    dependencies: [27, 28, 29, 30, 31, 32],
  },
  {
    id: 11,
    title: "Token Multisender",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 12,
    title: "DEX Sandwich Attack",
    overview: "Sandwich attack a decentralized exhange.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 13,
    title: "Signature Based Challenge",
    overview: "Complete a build using signatures.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [14, 15, 16, 56],
  },
  {
    id: 14,
    title: "Order Book Challenge",
    overview: "Create an order book sign signatures.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 15,
    title: "'Deadman's' Recovery Multisig",
    overview: "Complete a build using signatures.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 16,
    title: "Challenge 6 Multisig",
    overview: "Build your own mulsitig.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://t.me/+mkNNF_yHsK8yMTcx",
    image: "https://speedrunethereum.com/assets/3.png",
    dependencies: [17],
  },
  {
    id: 17,
    title: "MAAS Product 'Hyperchest'",
    overview: "Create a multisig as a service product - hyperchest",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [17],
  },
  {
    id: 18,
    title: "Run Your Own Node",
    overview: "Learn about the execution and consensus layer by running your own node.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [19, 20, 21, 22],
  },
  {
    id: 19,
    title: "Subgraph",
    overview: "Subgraph.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 20,
    title: "Build an Indexer",
    overview: "Build an Indexer.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [24, 25],
  },
  {
    id: 21,
    title: "RCP Server",
    overview: "Run your own RPC server for a live app.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [23],
  },
  {
    id: 22,
    title: "Run Your Own IPFS Node",
    overview: "Learn about the execution and consensus layer by running your own node.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 23,
    title: "HTTP Proxy",
    overview: "Use an HTTP proxy to upgrade to a second RPC with no downtime.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 24,
    title: "Analytics App",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 25,
    title: "Tax App",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 26,
    title: "Arbitrage",
    overview: "Create two DEXs and create an arbitrage script.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 27,
    title: "Signature Based NFL WL Mint",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 28,
    title: "Mainnet NFT",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 29,
    title: "Collision Oracle Game",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 30,
    title: "Future TTD Racing Game",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 31,
    title: "Merkle NFTs",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 32,
    title: "Composable NFTs",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 33,
    title: "Deadman's Switch",
    overview: "Build your own smart contract wallet that ",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 34,
    title: "Social Recovery",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 35,
    title: "Multisig Extension",
    overview: "Fork multisig.lol and build something new.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 36,
    title: "Lending App",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [37, 38],
  },
  {
    id: 37,
    title: "Options",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 38,
    title: "Shorting",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 39,
    title: "Streaming App",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 40,
    title: "Automation App",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 41,
    title: "Etherscan API",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [42, 43],
  },
  {
    id: 42,
    title: "OpenSea API",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 43,
    title: "Chrome Extensions",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 44,
    title: "Scripting Dashboard",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [45, 46],
  },
  {
    id: 45,
    title: "Hardhat Testing",
    overview: "Maybe something already broken",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 46,
    title: "Foundry Testing",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 47,
    title: "Circom Starter Kit",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [48],
  },
  {
    id: 48,
    title: "Circom Contract State",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [49],
  },
  {
    id: 49,
    title: "zk-prove-membership",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [50],
  },
  {
    id: 50,
    title: "zk-voting-example",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 51,
    title: "Unchecked Math",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [52, 53, 54, 55],
  },
  {
    id: 52,
    title: "Delegatecall",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 53,
    title: "Gas Golf any BG Contract",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 54,
    title: "Ethernaut!",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 55,
    title: "Reproduce Hacks",
    overview: "Reproduce the hacks found in Solidity by Example",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://solidity-by-example.org/",
    image: "https://picsum.photos/200",
  },
  {
    id: 56,
    title: "Signature Based Backend",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [57],
  },
  {
    id: 57,
    title: "Sig System & Burner Delegates",
    overview: "Sig Based System With Burner Delegates",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 58,
    title: "Make Soemthing New!",
    overview: "Fork any scaffold-eth branch and make something new.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://github.com/scaffold-eth/scaffold-eth-examples",
    image: "https://picsum.photos/200",
  },
  {
    id: 59,
    title: "Speedrunethereum!",
    overview: "Run through Speedrunethereum.com and help smooth out any edges.",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://speedrunethereum.com/",
    image: "https://picsum.photos/200",
    dependencies: [61],
  },
  {
    id: 60,
    title: "Build a 'Hyperstructure'",
    overview: "This is a filler overview",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 61,
    title: "Create a New Speedrunethereum Challenge",
    overview: "Build a new challenge with an amazing readme",
    description: " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
];

export const nodeData = getNodesFromDataNodes(dataNodes);
export const edgeData = getEdgesFromDataNodes(dataNodes);

export function getNodesFromDataNodes(dataNodes: DataNode[]) {
  return dataNodes.map(dataNode => {
    return {
      id: String(dataNode.id),
      position: {
        x: dataNodes.indexOf(dataNode) * 100,
        y: dataNodes.indexOf(dataNode) * 50,
      },
      draggable: false,
      data: {
        label: dataNode.title,
        overview: dataNode.overview,
        description: dataNode.description,
        link: dataNode.link,
        image: dataNode.image,
        tg: dataNode.tg,
      },
      //type: "dataNode",
      type: "customNode",
    };
  });
}

function getEdgesFromDataNodes(dataNodes: DataNode[]) {
  const edges: Edge[] = [];
  for (const node of dataNodes) {
    if (node.dependencies) {
      for (const dependency of node.dependencies) {
        edges.push({
          id: `${node.id}-${dependency}`,
          source: String(node.id),
          target: String(dependency),
          type: "default",
          // label: "UNLOCKS",
          sourceHandle: "a",
          style: {
            stroke: "#004747",
            strokeWidth: 3,
          },
        });
      }
    }
  }
  return edges;
}

export interface DataNode {
  id: number;
  title: string;
  overview: string;
  description: string;
  link: string;
  image?: string;
  tg?: string;
  dependencies?: number[]; // these are the ids of the nodes that this node depends on
  label?: string;
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 300;
const nodeHeight = 150;

export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node: Node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  //edge source and target nodes
  edges.forEach((edge: Edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach(node => {
    const nodeWithPosition = dagreGraph.node(node.id);
    console.log("nodeWithPosition", nodeWithPosition);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
    node.type = "customNode";

    node.position = {
      // For left-right
      // x: nodeWithPosition.x,
      // y: nodeWithPosition.y / 1.5,

      // For top-bottom
      x: nodeWithPosition.x / 1.5,
      y: nodeWithPosition.y * 1.2,
    };

    return node;
  });

  const layoutNodes = nodes;
  const layoutEdges = edges;
  return { layoutNodes, layoutEdges };
};

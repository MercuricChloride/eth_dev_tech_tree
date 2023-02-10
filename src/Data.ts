import Elk, { ElkEdgeSection, ElkExtendedEdge, ElkNode } from "elkjs/lib/elk.bundled.js";
import { Edge, Node } from "reactflow";
const elk = new Elk();

const NODE_WIDTH = 200;
const NODE_HEIGHT = 100;
const ELK_LAYOUT = "radial";
// const TREE_LAYOUT_OPTIONS = {
//   direction: "DOWN",
//   nodeDimensionsIncludeLabels: true,
//   spacingFactor: 1.5,
//   ranker: "tight-tree",
//   rankDir: "TB",
//   rankSep: 100,
//   edgeSep: 100,
//   nodeSep: 100,
// };

export interface DataNode {
  id: string;
  title: string;
  overview: string;
  description: string;
  link: string;
  image?: string;
  telegram?: string;
  children?: DataNode[];
}

export const dataNodes: DataNode[] = [
  {
    id: "0",
    title: "SpeedRunEthereum.com",
    overview: "An educational public good",
    description: "An educational public good",
    link: "https://speedrunethereum.com",
    children: [

  {
    id: "1",
    title: "Challenge 0 🎨 Simple NFT",
    overview: "Create a simple NFT to learn basics of scaffold-eth.",
    description:
      "Start your SpeedRunEthereum.com adventure here with the first challenge! \n\n 🎫 Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. Then, you'll use a template React app full of important Ethereum components and hooks. Finally, you'll deploy an NFT to a public network to share with friends! 🚀 \n\n 🌟 The final deliverable is an app that lets users purchase and transfer NFTs. Deploy your contracts to a testnet then build and upload your app to a public web server. Submit the url on SpeedRunEthereum.com!",
    link: "https://speedrunethereum.com/challenge/simple-nft-example",
    image: "https://speedrunethereum.com/assets/0.png",
    children: [
      {
        id: "2",
        title: "Challenge 1 🥩 Staking App",
        overview: "Create a decentralized application where users can coordinate a group funding effort.",
        description:
          "🦸 A superpower of Ethereum is allowing you, the builder, to create a simple set of rules that an adversarial group of players can use to work together. In this challenge, you create a decentralized application where users can coordinate a group funding effort. If the users cooperate, the money is collected in a second smart contract. If they defect, the worst that can happen is everyone gets their money back. The users only have to trust the code.\n\n🏦 Build a Staker.sol contract that collects ETH from numerous addresses using a payable stake() function and keeps track of balances. After some deadline if it has at least some threshold of ETH, it sends it to an ExampleExternalContract and triggers the complete() action sending the full balance. If not enough ETH is collected, allow users to withdraw().\n\n🎛 Building the frontend to display the information and UI is just as important as writing the contract. The goal is to deploy the contract and the app to allow anyone to stake using your app. Use a Stake(address,uint256) event to all stakes.\n\n🌟 The final deliverable is deploying a Dapp that lets users send ether to a contract and stake if the conditions are met, then yarn build and yarn surge your app to a public webserver. Submit the url on SpeedRunEthereum.com!",
        link: "https://speedrunethereum.com/challenge/decentralized-staking",
        image: "https://speedrunethereum.com/assets/1.png",
      },
      {
        id: "3",
        title: "Challenge 2 🪙 Token Vendor",
        overview: "Create a decentralized, digital currency with a vending machine to buy and sell your tokens.",
        description:
          "🤖 Smart contracts are kind of like 'always on' vending machines that anyone can access. Let's make a decentralized, digital currency. Then, let's build an unstoppable vending machine that will buy and sell the currency. We'll learn about the approve pattern for ERC20s and how contract to contract interactions work.\n\n🏵 Create YourToken.sol smart contract that inherits the ERC20 token standard from OpenZeppelin. Set your token to _mint() 1000 (* 10 ** 18) tokens to the msg.sender. Then create a Vendor.sol contract that sells your token using a payable buyTokens() function.\n\n🎛 Edit the frontend that invites the user to <input> an amount of tokens they want to buy. We'll display a preview of the amount of ETH (or USD) it will cost with a confirm button.\n\n🔍 It will be important to verify your token's source code in the block explorer after you deploy. Supporters will want to be sure that it has a fixed supply and you can't just mint more.\n\n🌟 The final deliverable is an app that lets users purchase your ERC20 token, transfer it, and sell it back to the vendor. Deploy your contracts on your public chain of choice and then yarn build and yarn surge your app to a public web server. Submit the url on SpeedRunEthereum.com!",
        link: "https://speedrunethereum.com/challenge/token-vendor",
        image: "https://speedrunethereum.com/assets/2.png",
      },
      {
        id: "4",
        title: "Challenge 3 🎲 Dice Game",
        overview: "Hack a Dice Game contract by predicting the randomness on chain",
        description:
          "🎰 Randomness is tricky on a public deterministic blockchain. The block hash is the result proof-of-work (for now) and some builders use this as a weak form of randomness. This challenge will give you an example of a contract using block hash to create random numbers. This randomness is exploitable. Other, stronger forms of randomness include commit/reveal schemes, oracles, or VRF from Chainlink.\n\n👍 One day soon, randomness will be built into the Ethereum protocol!\n\n💬 Dice Game is a contract that allows users to roll the dice to try and win the prize. If players roll either a 0, 1, or 2 they will win the current prize amount. The initial prize is 10% of the contract's balance, which starts out at .05 Eth.\n\n🧤 Every time a player rolls the dice, they are required to send .002 Eth. 40 percent of this value is added to the current prize amount while the other 60 percent stays in the contract to fund future prizes. Once a prize is won, the new prize amount is set to 10% of the total balance of the DiceGame contract.\n\n🧨 Your job is to attack the Dice Game contract! You will create a new contract that will predict the randomness ahead of time and only roll the dice when you're guaranteed to be a winner!",
        link: "https://speedrunethereum.com/challenge/dice-game",
        image: "https://speedrunethereum.com/assets/dice.png",
      },
    ],
  }, {
    id: "5",
    title: "Smart Wallet",
    overview: "Build your own simple smart contract wallet that can setName on ENS",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "33",
      title: "Deadman's Switch",
      overview: "Build your own smart contract wallet that ",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "34",
      title: "Social Recovery",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "35",
      title: "Multisig Extension",
      overview: "Fork multisig.lol and build something new.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }]
  }, {
    id: "6",
    title: "NFT Price Curve",
    overview: "Build an NFT where the minting price follows a price curve.",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "10",
      title: "SVG NFTs",
      overview: "Create NFTs using on-chain SVG code.",
      description:
        "🧙 Tinker around with cutting edge smart contracts that render SVGs in Solidity. /n/n🧫 We quickly discovered that the render function needs to be public... 🤔 This allows NFTs that own other NFTs to render their stash. Just wait until you see an Optimistic Loogie and a Fancy Loogie swimming around in the same Loogie Tank!",
      link: "https://t.me/+J9PRea84c1U0Mzkx",
      image: "https://speedrunethereum.com/assets/nfts.png",
      children: [{
        id: "27",
        title: "Signature Based NFL WL Mint",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }, {
        id: "28",
        title: "Mainnet NFT",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }, {
        id: "29",
        title: "Collision Oracle Game",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }, {
        id: "30",
        title: "Future TTD Racing Game",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }, {
        id: "31",
        title: "Merkle NFTs",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }, {
        id: "32",
        title: "Composable NFTs",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }]
    }],
  },
  {
    id: "7",
    title: "ERC20 Tokens",
    overview: "Build a simple ERC20 app.",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "11",
      title: "Token Multisender",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }],
  },
  {
    id: "8",
    title: "DEX Challenge",
    overview: "Build a decentralized exchange.",
    description:
      "💵 Build an exchange that swaps ETH to tokens and tokens to ETH. /n/n💰 This is possible because the smart contract holds reserves of both assets and has a price function based on the ratio of the reserves. Liquidity providers are issued a token that represents their share of the reserves and fees...",
    link: "https://t.me/+_NeUIJ664Tc1MzIx",
    image: "https://speedrunethereum.com/assets/4.png",
    children: [{
      id: "12",
      title: "DEX Sandwich Attack",
      overview: "Sandwich attack a decentralized exhange.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "26",
      title: "Arbitrage",
      overview: "Create two DEXs and create an arbitrage script.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "36",
      title: "Lending App",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
      children: [{
        id: "37",
        title: "Options",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }, {
        id: "38",
        title: "Shorting",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }],
    }],
  },
  {
    id: "9",
    title: "CRON Job Challenge",
    overview: "This is a filler overview",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "39",
      title: "Streaming App",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "40",
      title: "Automation App",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }],
  },
  {
    id: "13",
    title: "Signature Based Challenge",
    overview: "Complete a build using signatures.",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "14",
      title: "Order Book Challenge",
      overview: "Create an order book sign signatures.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "15",
      title: "'Deadman's' Recovery Multisig",
      overview: "Complete a build using signatures.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "16",
      title: "Challenge 6 Multisig",
      overview: "Build your own mulsitig.",
      description:
        "👩‍👩‍👧‍👧 Using a smart contract as a wallet we can secure assets by requiring multiple accounts to 'vote' on transactions. /n/n📝 The contract will keep track of transactions in an array of structs and owners will confirm or reject each one. Any transaction with enough confirmations can 'execute'.",
      link: "https://t.me/+mkNNF_yHsK8yMTcx",
      image: "https://speedrunethereum.com/assets/3.png",
      children: [{
        id: "17",
        title: "MAAS Product 'Hyperchest'",
        overview: "Create a multisig as a service product - hyperchest",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }],
    }, {
      id: "56",
      title: "Signature Based Backend",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
      children: [{
        id: "57",
        title: "Sig System & Burner Delegates",
        overview: "Sig Based System With Burner Delegates",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }],
    }],
  },
  {
    id: "18",
    title: "Run Your Own Node",
    overview: "Learn about the execution and consensus layer by running your own node.",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "19",
      title: "Subgraph",
      overview: "Subgraph.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "20",
      title: "Build an Indexer",
      overview: "Build an Indexer.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
      children: [{
        id: "24",
        title: "Analytics App",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }, {
        id: "25",
        title: "Tax App",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }],
    }, {
      id: "21",
      title: "RCP Server",
      overview: "Run your own RPC server for a live app.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
      children: [{
        id: "23",
        title: "HTTP Proxy",
        overview: "Use an HTTP proxy to upgrade to a second RPC with no downtime.",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
      }],
    }, {
      id: "22",
      title: "Run Your Own IPFS Node",
      overview: "Learn about the execution and consensus layer by running your own node.",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }],
  },
  {
    id: "41",
    title: "Etherscan API",
    overview: "This is a filler overview",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "42",
      title: "OpenSea API",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "43",
      title: "Chrome Extensions",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }],
  },
  {
    id: "44",
    title: "Scripting Dashboard",
    overview: "This is a filler overview",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "45",
      title: "Hardhat Testing",
      overview: "Maybe something already broken",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "46",
      title: "Foundry Testing",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }],
  },
  {
    id: "47",
    title: "Circom Starter Kit",
    overview: "This is a filler overview",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "48",
      title: "Circom Contract State",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
      children: [{
        id: "49",
        title: "zk-prove-membership",
        overview: "This is a filler overview",
        description:
          " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        link: "https://www.google.com",
        image: "https://picsum.photos/200",
        children: [{
          id: "50",
          title: "zk-voting-example",
          overview: "This is a filler overview",
          description:
            " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
          link: "https://www.google.com",
          image: "https://picsum.photos/200",
        }],
      }],
    }],
  },
  {
    id: "51",
    title: "Unchecked Math",
    overview: "This is a filler overview",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    children: [{
      id: "52",
      title: "Delegatecall",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "53",
      title: "Gas Golf any BG Contract",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "54",
      title: "Ethernaut!",
      overview: "This is a filler overview",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }, {
      id: "55",
      title: "Reproduce Hacks",
      overview: "Reproduce the hacks found in Solidity by Example",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://solidity-by-example.org/",
      image: "https://picsum.photos/200",
    }],
  },
  {
    id: "58",
    title: "Make Soemthing New!",
    overview: "Fork any scaffold-eth branch and make something new.",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://github.com/scaffold-eth/scaffold-eth-examples",
    image: "https://picsum.photos/200",
  },
  {
    id: "59",
    title: "Speedrunethereum!",
    overview: "Run through Speedrunethereum.com and help smooth out any edges.",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://speedrunethereum.com/",
    image: "https://picsum.photos/200",
    children: [{
      id: "61",
      title: "Create a New Speedrunethereum Challenge",
      overview: "Build a new challenge with an amazing readme",
      description:
        " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
      link: "https://www.google.com",
      image: "https://picsum.photos/200",
    }],
  },
  {
    id: "60",
    title: "Build a 'Hyperstructure'",
    overview: "This is a filler overview",
    description:
      " This is a long description.  This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  }]}]

export async function renderDataNodes(dataNodes: DataNode[], center = 500): Promise<[Node[], Edge[]]> {

  function flattenToOneArray(dataNodes: DataNode[]): any {
    return dataNodes.flatMap((node) => {
      if (!node.children) {
        return [dataNodeToNode(node)]
      } else {
        return [
          dataNodeToNode(node),
          ...flattenToOneArray(node.children)
        ]
      }
    })
  }

  function dataNodeToNode(dataNode: DataNode) {
    const {title, overview, description, link, image, children} = dataNode;
    const childIds = children?.map((child) => child.id) || [];
    return {
      id: String(dataNode.id),
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      data: {
        label: title,
        overview: overview,
        description: description,
        childIds,
        link: link,
        image: image,
        tg: dataNode.telegram,
      },
      // type: "customNode",
      type: "default"
    }
  }

  interface IEdge {
    id: string;
    sources: string[];
    source: string;
    targets: string[];
    target: string;
  }

  function dataNodeToEdges(dataNode: DataNode): IEdge[] {
    if(!dataNode.children) {
      return [];
    } else {
      return [
        ...dataNode.children.map((child) => {
          const source = String(dataNode.id);
          const target = String(child.id);
          return {
            id: `${dataNode.id}-${child.id}`,
            source,
            sources: [source],
            target,
            targets: [target],
          }
        }),
        ...dataNode.children.flatMap(dataNodeToEdges)
      ]
    }
  }


  const edges = dataNodes.flatMap(dataNodeToEdges);

  const graph: ElkNode = {
    id: 'root',
    children: flattenToOneArray(dataNodes),
    edges,
    width: 10000,
    height: 10000,
  }

  const layout = await elk.layout(graph, {
    layoutOptions: {
      'elk.algorithm': ELK_LAYOUT,
    }
  })

  const nodesWithPosition = layout.children?.map((node) => {
    return {
      ...node,
      position: {
        x: node.x || 0 + center,
        y: node.y || 0 + center,
      }
    }
  })

  return [nodesWithPosition as Node[], edges as IEdge[]];
}
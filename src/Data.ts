import { Edge, Node, Position } from "reactflow";
import dagre from "dagre";

export const dataNodes: DataNode[] = [
  {
    id: 1,
    title: "Challenge 0 🎨 Simple NFT",
    description: "Create a simple NFT to learn basics of scaffold-eth.",
    link: "https://speedrunethereum.com/challenge/simple-nft-example",
    image: "https://speedrunethereum.com/assets/0.png",
    dependencies: [2],
  },
  {
    id: 2,
    title: "Challenge 1 🥩 Staking App",
    description: "Create a decentralized application where users can coordinate a group funding effort.",
    link: "https://speedrunethereum.com/challenge/decentralized-staking",
    image: "https://speedrunethereum.com/assets/1.png",
    dependencies: [3],
  },
  {
    id: 3,
    title: "Challenge 2 🪙 Token Vendor",
    description: "Create a decentralized, digital currency with a vending machine to buy and sell your tokens.",
    link: "https://speedrunethereum.com/challenge/token-vendor",
    image: "https://speedrunethereum.com/assets/2.png",
    dependencies: [4],
  },
  {
    id: 4,
    title: "Challenge 3 🎲 Dice Game",
    description: "Hack a Dice Game contract by predicting the randomness on chain.",
    link: "https://speedrunethereum.com/challenge/dice-game",
    image: "https://speedrunethereum.com/assets/dice.png",
    dependencies: [5, 6, 7, 8, 9, 13, 18, 41, 44, 47, 51, 58, 59, 60],
  },
  {
    id: 5,
    title: "Smart Wallet",
    description: "Build your own simple smart contract wallet that can setName on ENS",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [33, 34, 35],
  },
  {
    id: 6,
    title: "NFT Price Curve",
    description: "Build an NFT where the minting price follows a price curve.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [10],
  },
  {
    id: 7,
    title: "ERC20 Tokens",
    description: "Build a simple ERC20 app.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [11],
  },
  {
    id: 8,
    title: "DEX Challenge",
    description: "Build a decentralized exchange.",
    link: "https://t.me/+_NeUIJ664Tc1MzIx",
    image: "https://speedrunethereum.com/assets/4.png",
    dependencies: [12, 26, 36],
  },
  {
    id: 9,
    title: "CRON Job Challenge",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [39, 40],
  },
  {
    id: 10,
    title: "SVG NFTs",
    description: "Create NFTs using on-chain SVG code.",
    link: "https://t.me/+J9PRea84c1U0Mzkx",
    image: "https://speedrunethereum.com/assets/nfts.png",
    dependencies: [27, 28, 29, 30, 31, 32],
  },
  {
    id: 11,
    title: "Token Multisender",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 12,
    title: "DEX Sandwich Attack",
    description: "Sandwich attack a decentralized exhange.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 13,
    title: "Signature Based Challenge",
    description: "Complete a build using signatures.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [14, 15, 16, 56],
  },
  {
    id: 14,
    title: "Order Book Challenge",
    description: "Create an order book sign signatures.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 15,
    title: "'Deadman's' Recovery Multisig",
    description: "Complete a build using signatures.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 16,
    title: "Challenge 6 Multisig",
    description: "Build your own mulsitig.",
    link: "https://t.me/+mkNNF_yHsK8yMTcx",
    image: "https://speedrunethereum.com/assets/3.png",
    dependencies: [17],
  },
  {
    id: 17,
    title: "MAAS Product 'Hyperchest'",
    description: "Create a multisig as a service product - hyperchest",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [17],
  },
  {
    id: 18,
    title: "Run Your Own Node",
    description: "Learn about the execution and consensus layer by running your own node.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [19, 20, 21, 22],
  },
  {
    id: 19,
    title: "Subgraph",
    description: "Subgraph.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 20,
    title: "Build an Indexer",
    description: "Build an Indexer.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [24, 25],
  },
  {
    id: 21,
    title: "RCP Server",
    description: "Run your own RPC server for a live app.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [23],
  },
  {
    id: 22,
    title: "Run Your Own IPFS Node",
    description: "Learn about the execution and consensus layer by running your own node.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 23,
    title: "HTTP Proxy",
    description: "Use an HTTP proxy to upgrade to a second RPC with no downtime.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 24,
    title: "Analytics App",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 25,
    title: "Tax App",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 26,
    title: "Arbitrage",
    description: "Create two DEXs and create an arbitrage script.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 27,
    title: "Signature Based NFL WL Mint",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 28,
    title: "Mainnet NFT",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 29,
    title: "Collision Oracle Game",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 30,
    title: "Future TTD Racing Game",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 31,
    title: "Merkle NFTs",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 32,
    title: "Composable NFTs",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 33,
    title: "Deadman's Switch",
    description: "Build your own smart contract wallet that ",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 34,
    title: "Social Recovery",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 35,
    title: "Multisig Extension",
    description: "Fork multisig.lol and build something new.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 36,
    title: "Lending App",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [37, 38],
  },
  {
    id: 37,
    title: "Options",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 38,
    title: "Shorting",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 39,
    title: "Streaming App",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 40,
    title: "Automation App",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 41,
    title: "Etherscan API",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [42, 43],
  },
  {
    id: 42,
    title: "OpenSea API",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 43,
    title: "Chrome Extensions",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 44,
    title: "Scripting Dashboard",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [45, 46],
  },
  {
    id: 45,
    title: "Hardhat Testing",
    description: "Maybe something already broken",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 46,
    title: "Foundry Testing",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 47,
    title: "Circom Starter Kit",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [48],
  },
  {
    id: 48,
    title: "Circom Contract State",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [49],
  },
  {
    id: 49,
    title: "zk-prove-membership",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [50],
  },
  {
    id: 50,
    title: "zk-voting-example",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 51,
    title: "Unchecked Math",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [52, 53, 54, 55],
  },
  {
    id: 52,
    title: "Delegatecall",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 53,
    title: "Gas Golf any BG Contract",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 54,
    title: "Ethernaut!",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 55,
    title: "Reproduce Hacks",
    description: "Reproduce the hacks found in Solidity by Example",
    link: "https://solidity-by-example.org/",
    image: "https://picsum.photos/200",
  },
  {
    id: 56,
    title: "Signature Based Backend",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [57],
  },
  {
    id: 57,
    title: "Sig System & Burner Delegates",
    description: "Sig Based System With Burner Delegates",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 58,
    title: "Make Soemthing New!",
    description: "Fork any scaffold-eth branch and make something new.",
    link: "https://github.com/scaffold-eth/scaffold-eth-examples",
    image: "https://picsum.photos/200",
  },
  {
    id: 59,
    title: "Speedrunethereum!",
    description: "Run through Speedrunethereum.com and help smooth out any edges.",
    link: "https://speedrunethereum.com/",
    image: "https://picsum.photos/200",
    dependencies: [61],
  },
  {
    id: 60,
    title: "Build a 'Hyperstructure'",
    description: "",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 61,
    title: "Create a New Speedrunethereum Challenge",
    description: "Build a new challenge with an amazing readme",
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
        description: dataNode.description,
        link: dataNode.link,
        image: dataNode.image,
        tg: dataNode.tg,
      },
      type: "dataNode",
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

export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node: Node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

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
      x: nodeWithPosition.x,
      y: nodeWithPosition.y / 1.5,
    };

    return node;
  });

  const layoutNodes = nodes;
  const layoutEdges = edges;
  return { layoutNodes, layoutEdges };
};

import { Edge, Node, Position } from "reactflow";
import dagre from "dagre";

export const dataNodes: DataNode[] = [
  {
    id: 1,
    title: "Challenge 1",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [2],
  },
  {
    id: 2,
    title: "Challenge 2",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [3],
  },
  {
    id: 3,
    title: "Challenge 3",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [4],
  },
  {
    id: 4,
    title: "Challenge 4",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [5, 6, 7, 8],
  },
  {
    id: 5,
    title: "Defi",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [9],
  },
  {
    id: 6,
    title: "NFT",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [10],
  },
  {
    id: 7,
    title: "Infrastructure",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [11],
  },
  {
    id: 8,
    title: "Scripts",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [12],
  },
  {
    id: 9,
    title: "Simple ERC20",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 10,
    title: "Simple NFT",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 11,
    title: "Running your own node",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 12,
    title: "Advanced Ethers.js",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
];

export const nodeData = getNodesFromDataNodes(dataNodes);
export const edgeData = getEdgesFromDataNodes(dataNodes);

export function getNodesFromDataNodes(dataNodes: DataNode[]) {
  return dataNodes.map((dataNode) => {
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
          type: "bezier",
          label: "UNLOCKS",
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
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 300;
const nodeHeight = 150;

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = "TB"
) => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node: Node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge: Edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });
  const layoutNodes = nodes;
  const layoutEdges = edges;
  return { layoutNodes, layoutEdges };
};

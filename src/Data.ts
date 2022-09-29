import { Edge, Node, Position } from "reactflow";
import dagre from "dagre";

export const dataNodes: DataNode[] = [
  {
    id: 1,
    title: "Node 1",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [2],
  },
  {
    id: 2,
    title: "Node 2",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [3, 4, 5],
  },
  {
    id: 3,
    title: "Node 3",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "Node 4",
    description: "This is some sample text to show how the description works.",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "Node 5",
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
          type: "straight",
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

const nodeWidth = 172;
const nodeHeight = 36;

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

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
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

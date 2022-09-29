import { Edge } from "reactflow";

export const dataNodes: DataNode[] = [
  {
    id: 1,
    title: "Node 1",
    description: "Node 1 description",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [2],
  },
  {
    id: 2,
    title: "Node 2",
    description: "Node 2 description",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
    dependencies: [3, 4, 5],
  },
  {
    id: 3,
    title: "Node 3",
    description: "Node 3 description",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "Node 4",
    description: "Node 4 description",
    link: "https://www.google.com",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "Node 5",
    description: "Node 5 description",
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

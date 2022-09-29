import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { DataNode } from "./DataNode";
import { nodeData, edgeData, getLayoutedElements } from "../Data";

const nodeTypes = {
  dataNode: DataNode,
};

const { layoutNodes, layoutEdges } = getLayoutedElements(
  nodeData,
  edgeData,
  "LR"
);

export function Flow() {
  //   const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
  const [nodes, , onNodesChange] = useNodesState(layoutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}

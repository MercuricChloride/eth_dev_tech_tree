import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  ReactFlowInstance,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { nodeData, edgeData, getLayoutedElements, DataNode as DataNodeType } from "../Data";
import Modal from "./Modal";
import CustomNode from "./CustomNode";

const { layoutNodes, layoutEdges } = getLayoutedElements(nodeData, edgeData, /*"LR"*/ "TB" );

export function Flow() {
  //const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
  const [nodes, , onNodesChange] = useNodesState(layoutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);
  const [reactFlow, setReactFlow] = useState<ReactFlowInstance | null>(null);

  // Modal state
  const [modalData, setModalData] = useState<DataNodeType | null>(null);

  function showModal(data: DataNodeType) {
    console.log(`called with data`, data);
    if (data) {
      setModalData(data);
    } else {
      setModalData(null);
      throw new Error("No data passed");
    }
  }

  function hideModal() {
    setModalData(null);
  }

  const onConnect = useCallback((params: any) => setEdges(eds => addEdge(params, eds)), [setEdges]);
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  //Pan and zoom when loading page
  useEffect(() => {
    if (reactFlow) {
      const { x, y } = nodes[3].position;
      reactFlow.setCenter(x, y, { duration: 1500, zoom: 0.6 });
    }
  }, [reactFlow, nodes]);

  return (
    <>
      {modalData && <Modal hideModal={hideModal} modalData={modalData} isModalOpen={Boolean(modalData)} />}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        nodeOrigin={[0.5, 0.5]}

        onNodeClick={(event, node: Node<DataNodeType>) => {
          console.log("This is the node clicked", node);
          showModal(node.data);
        }}
        onInit={reactFlowInstance => {
          setReactFlow(reactFlowInstance);
        }}
        // fitViewOptions={{ duration: 2000 }}
        // fitView={true}
        style={{
          background: "#1A202C",
          zIndex: 0,
        }}
      >
        <Background size={-1}/>
      </ReactFlow>
    </>
  );
}

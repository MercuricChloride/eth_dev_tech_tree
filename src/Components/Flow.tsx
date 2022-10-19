import React, { useCallback, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Node } from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { DataNode } from "./DataNode";
import { nodeData, edgeData, getLayoutedElements, DataNode as DataNodeType } from "../Data";
import Modal from "./Modal";

const nodeTypes = {
  dataNode: DataNode,
};

const { layoutNodes, layoutEdges } = getLayoutedElements(nodeData, edgeData, "LR");

export function Flow() {
  //   const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
  const [nodes, , onNodesChange] = useNodesState(layoutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);

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
        onNodeClick={(event, node: Node<DataNodeType>) => {
          console.log("This is the node clicked", node);
          showModal(node.data);
        }}
      >
        <MiniMap style={{ padding: "1rem" }} />
        <Controls />
        <Background />
      </ReactFlow>
    </>
  );
}

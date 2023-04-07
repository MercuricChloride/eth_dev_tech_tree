import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, addEdge, Node, ReactFlowInstance } from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { dataNodes, renderDataNodes, DataNode } from "../Data";
import Modal from "./Modal";
import CustomNode from "./CustomNode";

export function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlow, setReactFlow] = useState<ReactFlowInstance | null>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  // Modal state
  const [modalData, setModalData] = useState<DataNode | null>(null);

  function showModal(data: DataNode) {
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

  async function init() {
    const [positionedNodes, positionedEdges] = await renderDataNodes(dataNodes);
    setNodes(positionedNodes);
    setEdges(positionedEdges);
  }

  useEffect(() => {
    init();
  }, []);

  // write an function that pans to each node in a sequence
  // then pans to the first node
  function panToNodes(ids: string[] = []) {
    let i = 0;
    const intervalId = setInterval(() => {
      panToNode(ids[i]);
      i++;
      if (i > ids.length - 1) {
        panToNode("0", true);
        clearInterval(intervalId);
      }
    }, 2500);
  }

  function panToNode(id: string, overview = false) {
    const node = nodes.find(node => node.id === id);
    if (node) {
      const { x, y } = node.position;
      reactFlow?.setCenter(x, y, { duration: 1500, zoom: overview ? 0.6 : 2 });
    }
  }

  //Pan and zoom when loading page
  useEffect(() => {
    if (reactFlow && !animation) {
      panToNodes(["1", "60", "18", "7"]);
      setAnimation(true);
    }
  }, [reactFlow]);

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
        onNodeClick={(event, node: Node<DataNode>) => {
          console.log("This is the node clicked", node);
          showModal(node.data);
        }}
        onInit={reactFlowInstance => {
          setReactFlow(reactFlowInstance);
        }}
        fitViewOptions={{ duration: 1500 }}
        fitView={true}
        style={{
          background: "#1A202C",
        }}
      >
        {/*
        <MiniMap nodeColor={"#64748B"} nodeStrokeWidth={50} nodeStrokeColor={"#334155"} />
        <Controls />
        */}
        <Background size={-1} />
      </ReactFlow>
    </>
  );
}

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, addEdge, Node, ReactFlowInstance, Edge } from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { nodeData, edgeData, getLayoutedElements, DataNode as DataNodeType, dataNodes } from "../Data";
import Modal from "./Modal";
import CustomNode from "./CustomNode";
import * as d3 from "d3-force";
import { getDataLinks } from "../Data";

const { layoutNodes, layoutEdges } = getLayoutedElements(nodeData, edgeData, /*"LR"*/ "TB");

export function Flow() {
  //const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);
  const [reactFlow, setReactFlow] = useState<ReactFlowInstance | null>(null);

  const forceNodes = nodeData.map(node => {
    return {
      ...node,
      vx: 0,
      vy: 0,
    };
  });

  const dataLinks = getDataLinks(dataNodes);

  console.log(dataLinks);

  const simulation = useRef(
    d3
      .forceSimulation(forceNodes)
      .force("charge", d3.forceManyBody().strength(-100))
      .force("link", d3.forceLink(dataLinks).distance(200))
      .force("collide", d3.forceCollide(100)),
  );

  useEffect(() => {
    simulation.current.on("tick", () => {
      const simulationNodes = simulation.current.nodes();
      const newNodes = simulationNodes.map(node => {
        return {
          ...node,
          position: {
            // @ts-ignore
            x: node.x + 100,
            // @ts-ignore
            y: node.y + 100,
          },
        };
      });
      setNodes(nodes => newNodes);
    });
  });

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

  // const formatNodes = useCallback(() => {
  //   const { layoutNodes, layoutEdges } = getLayoutedElements(nodes, edges, "TB");
  //   setNodes([...layoutNodes]);
  //   setEdges([...layoutEdges]);
  // }, [nodes, edges]);

  const onConnect = useCallback((params: any) => setEdges(eds => addEdge(params, eds)), [setEdges]);

  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  // Pan and zoom when loading page
  useEffect(() => {
    if (reactFlow) {
      // const { x, y } = nodes[3].position;
      // reactFlow.setCenter(x, y, { duration: 1500, zoom: 0.6 });
      reactFlow.setCenter(0, 0, { zoom: 0.25 });
    }
  }, [reactFlow, nodes]);

  return (
    <>
      {modalData && <Modal hideModal={hideModal} modalData={modalData} isModalOpen={Boolean(modalData)} />}
      <div
        style={{
          display: "absolute",
          width: "20%",
        }}
      ></div>
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

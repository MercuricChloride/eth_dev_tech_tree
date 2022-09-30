import { Handle, NodeProps, Position } from "reactflow";

export function DataNode({ data }: NodeProps) {
  // const { label, description, link, image, tg } = data;
  const { label, description } = data;
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #000",
        backgroundColor: "#fff",
        flexDirection: "column",
        width: "150px",
        padding: "10px 25px",
      }}
    >
      <Handle type="target" position={Position.Left} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <h3>{label}</h3>
        <h3>🏗️</h3>
      </div>
      <p>{description}</p>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

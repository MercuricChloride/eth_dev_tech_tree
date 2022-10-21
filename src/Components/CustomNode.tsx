import { Handle, Position } from "reactflow";
import { DataNode as DataNodeType } from "../Data";

function CustomNode({ data }: { data: DataNodeType }) {
  // console.log("⚡️ ~ file: Flow.tsx ~ line 26 ~ CustomNode ~ data", data);
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className="border-2 border-teal-500 px-3 py-5 text-white rounded-lg">
        <p>{data.label}</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default CustomNode;

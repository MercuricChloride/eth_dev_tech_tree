import { Handle, Position } from "reactflow";
import { DataNode as DataNodeType } from "../Data";

function CustomNode({ data, id: nodeId }: { data: DataNodeType, id: string }) {
  return (
    <div
      data-tip={true}
      data-for={nodeId}
    >
      <Handle type="target" position={Position.Top} />
      <div className="group relative inline-block border-4 border-teal-500 px-3 py-3 text-white rounded-lg hover:border-teal-200 bg-slate-700 hover:bg-slate-500 duration-50 cursor-pointer"
        style={{
          width: "140px",
          textAlign: "center",
        }}
      >
        <p>{data.label}</p>
        <span className="absolute hidden group-hover:flex -left-[33%] -top-[22%] -translate-y-full w-64 px-2 py-1 bg-slate-700 rounded-lg border-2 border-teal-500 text-center text-white" >
          {data.overview}
        </span>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

export default CustomNode;

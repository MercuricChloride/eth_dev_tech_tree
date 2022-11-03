import { Handle, Position } from "reactflow";
import { DataNode as DataNodeType } from "../Data";
import ReactTooltip from "react-tooltip";

function CustomNode({ data, id: nodeId }: { data: DataNodeType, id: string }) {
  // console.log("⚡️ ~ file: Flow.tsx ~ line 26 ~ CustomNode ~ data", data);
  return (
    <div
      data-tip={true}
      data-for={nodeId}
    >
      <ReactTooltip id={nodeId} place="right" className="w-64">
        <span>{data.overview}</span>
      </ReactTooltip>
      {/*
      <Handle type="target" position={Position.Left} />
      */}
      <Handle type="target" position={Position.Top} />
      <div className="border-4 border-teal-500 px-3 py-3 text-white rounded-lg hover:border-teal-200 bg-slate-700 hover:bg-slate-500"
        style={{
          //width: "220px",
          width: "140px",
          textAlign: "center",
        }}
      >
        <p>{data.label}</p>
      </div>
      {/*
      <Handle type="source" position={Position.Right} id="a" />
      */}
      <Handle type="source" position={Position.Bottom} id="a" />
      <ReactTooltip />
    </div>
  );
}

export default CustomNode;

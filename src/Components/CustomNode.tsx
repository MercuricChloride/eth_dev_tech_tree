import { Handle, Position } from "reactflow";
import { DataNode as DataNodeType } from "../Data";
import { Tooltip } from '@chakra-ui/react'

function CustomNode({ data, id: nodeId }: { data: DataNodeType, id: string }) {

  return (
  
        <div
          data-tip={true}
          data-for={nodeId}
        >
          <Handle type="target" position={Position.Top} />

          <Tooltip className="border-2 border-teal-500 px-2 py-2 text-white rounded-lg hover:border-teal-200 bg-slate-700" label={data.overview} placement='top' openDelay={50}>
            <div className="border-4 border-teal-500 px-3 py-3 text-white rounded-lg hover:border-teal-200 bg-slate-700 hover:bg-slate-500"
              style={{
                width: "140px",
                textAlign: "center",
              }}
            >
              <p>{data.label}</p>
            </div>
            </Tooltip>

          <Handle type="source" position={Position.Bottom} id="a" />
        </div>

  );
}

export default CustomNode;

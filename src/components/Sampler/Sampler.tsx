import "./Sampler.css";
import { FC } from "react";

interface SamplerProps {
  id: string;
  active: boolean;
  mapping: string;
}

const Sampler: FC<SamplerProps> = ({ id, active, mapping }) => {
  return (
    <div className={`sampler ${active ? "activePad" : ""}`}>
      <div className={`pad centered`} />
      <span className='label centered'>{`Pad ${id} - ${mapping}`}</span>
    </div>
  );
};

export default Sampler;

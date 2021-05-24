import "./Sampler.css";
import { FC } from "react";

interface Props {
  index: number;
  mappedKey?: string;
}

const Sampler: FC<Props> = ({ index }) => {
  return (
    <div className='sampler'>
      <div className='pad centered' />
      <span className='label centered'>{`Pad ${index}`}</span>
    </div>
  );
};

export default Sampler;

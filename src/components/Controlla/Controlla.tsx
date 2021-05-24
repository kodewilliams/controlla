import "./Controlla.css";
import { FC } from "react";
import Brand from "../Brand/Brand";
import Config from "../Config/Config";
import Samplers from "../Samplers/Samplers";

const Controlla: FC = () => {
  return (
    <div className='controlla'>
      <Brand />
      <Config />
      <Samplers />
    </div>
  );
};

export default Controlla;

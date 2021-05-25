import "./Controlla.css";
import { FC } from "react";

import Brand from "../Brand/Brand";
import Usage from "../Usage/Usage";
import Samplers from "../Samplers/Samplers";
import { ConfigProvider, ConfigState } from "../../states/config";

const Controlla: FC = () => {
  const store = new ConfigState();

  return (
    <div className='controlla'>
      <ConfigProvider value={store}>
        <Brand />
        <Usage />
        <Samplers />
      </ConfigProvider>
    </div>
  );
};

export default Controlla;

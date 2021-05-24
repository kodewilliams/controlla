import "./Controlla.css";
import { FC } from "react";

import Brand from "../Brand/Brand";
import Config from "../Config/Config";
import Samplers from "../Samplers/Samplers";
import { ConfigProvider, ConfigState } from "../../states/config";

const Controlla: FC = () => {
  const store = new ConfigState();

  return (
    <div className='controlla'>
      <ConfigProvider value={store}>
        <Brand />
        <Config />
        <Samplers />
      </ConfigProvider>
    </div>
  );
};

export default Controlla;

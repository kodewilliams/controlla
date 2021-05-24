import "./Samplers.css";
import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import Sampler from "../Sampler/Sampler";
// import useKeyPressed from "../../hooks/useKeyPress";
import { ConfigContext } from "../../states/config";

const Samplers: FC = observer(() => {
  const { mappings } = useContext(ConfigContext);

  const renderPads = () =>
    Object.entries(mappings).map(([key, mapping]) => (
      <Sampler key={`sampler-${key}`} id={key} mapping={mapping} />
    ));

  return <div className='samplers'>{renderPads()}</div>;
});

export default Samplers;

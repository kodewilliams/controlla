import "./Samplers.css";
import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Sampler from "../Sampler/Sampler";
import { ConfigContext } from "../../states/config";

const Samplers: FC = observer(() => {
  const store = useContext(ConfigContext);
  const { updatePressed, clearPressed } = store;

  useEffect(() => {
    const onKeyDown = (e: any) => {
      if (e.repeat) return;
      updatePressed(e.key);
      return e.key;
    };

    const onKeyUp = (e: any) => {
      clearPressed();
      return e.key;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [updatePressed, clearPressed]);

  const pads = Object.entries(store.mappings).map(([key, mapping]) => (
    <Sampler
      id={key}
      key={`sampler-${key}`}
      mapping={mapping}
      active={store.pressed === mapping}
    />
  ));

  return <div className='samplers'>{pads}</div>;
});

export default Samplers;

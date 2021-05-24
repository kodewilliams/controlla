import "./Samplers.css";
import { FC, useEffect } from "react";
import Sampler from "../Sampler/Sampler";
import useKeyPressed from "../../hooks/useKeyPress";

const Samplers: FC = () => {
  const spacePressed = useKeyPressed("u");

  const pads = [];

  useEffect(() => {
    console.log(spacePressed);
  }, [spacePressed]);

  for (let idx = 0; idx < 9; ++idx) {
    pads.push(<Sampler key={`sampler-${idx + 1}`} index={idx + 1} />);
  }

  return <div className='samplers'>{pads}</div>;
};

export default Samplers;

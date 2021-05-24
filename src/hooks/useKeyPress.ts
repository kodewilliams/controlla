import { useEffect, useState } from "react";

const useKeyPressed = (target: string) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = ({ key }: any) => {
    if (key === target) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }: any) => {
    if (key === target) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };

    // eslint-disable-next-line
  }, []);

  return keyPressed;
};

export default useKeyPressed;

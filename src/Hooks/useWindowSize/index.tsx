import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  return { width, height };
};

export default useWindowSize;

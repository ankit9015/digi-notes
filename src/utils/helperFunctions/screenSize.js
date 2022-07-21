import { useEffect, useState } from "react";
import debounce from "./debounce";

function screenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateScreenSize = debounce(
    () =>
      setScreenSize({ width: window.innerWidth, height: window.innerHeight }),
    100
  );

  useEffect(() => {
    window.addEventListener("resize", () => updateScreenSize());

    return () => {
      window.removeEventListener("resize", () => updateScreenSize());
    };
  }, [setScreenSize]);

  return { ...screenSize };
}

export default screenSize;

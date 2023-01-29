import { React, useEffect, useState } from "react";

const CustomCursor = () => {
  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
      const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);
    return mousePosition;
  };

  const mousePosition = useMousePosition();

  return (
    <>
      <div
        className={`hidden lg:block lg:absolute lg:bg-white lg:rounded-full lg:w-2 lg:h-2 lg:z-10`}
        style={{ top: mousePosition.y, left: mousePosition.x}}
      ></div>
    </>
  );
};

export default CustomCursor;

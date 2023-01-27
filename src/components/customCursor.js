import {React, useEffect, useState} from 'react';

const Cursor = () => {

  const useMousePosition = () => {
    
    const [
      mousePosition,
      setMousePosition
    ] = useState({ x: null, y: null });
  
    useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
    return mousePosition;
  };

  const mousePosition = useMousePosition();

  return (
    <div 
    className={`absolute bg-white rounded-full w-2 h-2`}
    style={{top: mousePosition.y, left: mousePosition.x}}
    >
    </div>
  )
}

export default Cursor
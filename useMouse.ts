import { useState, useEffect } from 'react';

export const useMouse = () => {
  const [mousePos, setMousePos] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.x, y: event.y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePos;
}
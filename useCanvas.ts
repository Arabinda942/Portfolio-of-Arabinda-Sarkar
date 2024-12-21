import { useEffect, useRef } from 'react';

interface UseCanvasOptions {
  onResize?: (width: number, height: number) => void;
}

export const useCanvas = ({ onResize }: UseCanvasOptions = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      onResize?.(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onResize]);

  return canvasRef;
}
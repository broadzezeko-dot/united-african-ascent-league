'use client';

import { useRef, useState } from 'react';

export function SignaturePad({ label }: { label: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const [isSigned, setIsSigned] = useState(false);

  const startDrawing = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const rect = canvas.getBoundingClientRect();
    context.beginPath();
    context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    context.lineWidth = 2;
    context.strokeStyle = '#f8d77a';
    isDrawingRef.current = true;
    setIsSigned(true);
  };

  const draw = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const rect = canvas.getBoundingClientRect();
    context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    context.stroke();
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  return (
    <div className="rounded-2xl border border-uaal-gold/30 bg-uaal-soft/90 p-3">
      <div className="mb-2 text-sm font-bold text-white">{label}</div>
      <canvas
        ref={canvasRef}
        width={300}
        height={120}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerLeave={stopDrawing}
        className="w-full rounded-xl border border-uaal-gold/50 bg-[#091923]"
      />
      <div className="mt-2 text-xs text-uaal-muted">{isSigned ? 'Signature captured' : 'Sign here'}</div>
    </div>
  );
}

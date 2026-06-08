import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
      fixed
      w-6
      h-6
      rounded-full
      pointer-events-none
      z-[9999]
      bg-blue-500/50
      blur-sm
      "
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    />
  );
};

export default Cursor;
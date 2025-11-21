import { useState } from "react";

const StartV2 = ({ starCount }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [hoverIdx, setHoverIdx] = useState(-1);

  const star = new Array(starCount).fill(0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {star.length > 0 &&
        star.map((_, i) => {
          const isActive = hoverIdx ? hoverIdx >= i + 1 : selectedIdx >= i + 1;
          return (
            <span
              style={{
                fontSize: "24px",
                color: `${isActive ? "gold" : "black"}`,
                cursor: "pointer",
              }}
              onClick={() => setSelectedIdx(i + 1)}
              onMouseEnter={() => setHoverIdx(i + 1)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              ★
            </span>
          );
        })}
    </div>
  );
};

export default StartV2;

import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const ConfettiStars = ({ run }) => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={30}
      initialVelocityY={{ min: 0, max: 10 }}
      recycle={false}
      run={run}
      colors={[
        "#ffdd00",
        "#ffe246",
        "#ffe66a",
        "#ffeb8a",
        "#fff0a7",
        "#fff7d3",
        "#ffffff",
      ]}
      drawShape={(ctx) => {
        ctx.beginPath();
        ctx.lineTo((60 - 60) / 7, (4 - 50) / 7);
        ctx.lineTo((81 - 60) / 7, (38 - 50) / 7);
        ctx.lineTo((119 - 60) / 7, (46 - 50) / 7);
        ctx.lineTo((89 - 60) / 7, (73 - 50) / 7);
        ctx.lineTo((97 - 60) / 7, (110 - 50) / 7);
        ctx.lineTo((60 - 60) / 7, (94 - 50) / 7);

        ctx.lineTo((-97 + 60) / 7, (110 - 50) / 7);
        ctx.lineTo((-89 + 60) / 7, (73 - 50) / 7);
        ctx.lineTo((-119 + 60) / 7, (46 - 50) / 7);
        ctx.lineTo((-81 + 60) / 7, (38 - 50) / 7);
        ctx.lineTo((-60 + 60) / 7, (4 - 50) / 7);
        ctx.stroke();
        ctx.closePath();
      }}
    />
  );
};

export default ConfettiStars;

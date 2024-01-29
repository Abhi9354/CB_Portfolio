import { useEffect } from "react";

export const Background_animation = () => {
  const animation = () => {
    const canvas = document.getElementById("Matrix");
    const context = canvas.getContext("2d");

    var width = window.screen.width;
    var height = window.screen.height;

    canvas.width = width;
    canvas.height = width < 426 ? height / 1.5 : height / 1.18;

    const nums = "01";

    const alphabet = nums;
    const fontSize = 20;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x += 2) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#FF1818";
      context.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    setInterval(draw, 100);
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <div>
        <canvas id="Matrix" className="relative w-screen"></canvas>
      </div>
    </>
  );
};

import { useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";
import Lottie from "lottie-react";
const Lottier = ({ data, fitMode = null, stayAtLastFrame = false }) => {
  let frame = useCurrentFrame();
  let { width, height } = useVideoConfig();
  let { op } = data;
  stayAtLastFrame ? (frame > op ? (frame = op) : "") : "";
  let arw = width / data.w,
    arh = height / data.h;
  data.w = width;
  data.h = height;
  switch (true) {
    case /fitToWidth/g.test(fitMode):
      data.layers.forEach((layer) => {
        layer.sw *= arw;
        layer.sh *= arw;
      });
      break;
    case /fitToHeight/g.test(fitMode):
      data.layers.forEach((layer) => {
        layer.sw *= arh;
        layer.sh *= arh;
      });
      break;
    case /fitToContent/g.test(fitMode):
      data.layers.forEach((layer) => {
        layer.sw *= arw;
        layer.sh *= arh;
      });
      break;
  }
  return (
    <div
      style={{
        width: data.w + "px",
        height: data.h + "px",
        backgroundImage:
          "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%)",
        backgroundSize: `${width / 50}px ${width / 50}px`,
        backgroundPosition: `0px 0px,${width / 100}px ${width / 100}px`,
      }}
    >
      <Lottie
        autoplay={false}
        initialSegment={[frame, frame]}
        animationData={data}
      />
    </div>
  );
};
const useLottie = (data) => {
  let { w, h, op, fr } = data;
  return { w, h, op: Math.floor(op), fr };
};
export { Lottier, useLottie };

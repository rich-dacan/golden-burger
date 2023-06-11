import React from "react";
import Lottie from "react-lottie";
import { useState } from "react";
import burgerAnimation from "../../../animations/burger-lottie-animation.json";

export const BurgerAnimation: React.FC = () => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: burgerAnimation,
    w: 20,
    h: 200,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}
    />
  );
};

// export default BurgerAnimation;

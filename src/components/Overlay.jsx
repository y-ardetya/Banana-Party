import React from "react";

const Overlay = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        href="https://codesandbox.io/s/2ycs3"
        className="absolute bottom-10 left-10 text-[12px] md:text-base lg:text-xl"
      >
        Inspired by
        <br />
        Paul Henschel
        <br />
      </a>
      <div className="absolute top-10 left-10 text-[12px] md:text-base lg:text-xl">
        BNANS —
      </div>
      <div className="absolute bottom-10 right-10 text-[12px] md:text-base lg:text-xl">
        06/04/2023
      </div>
    </div>
  );
};

export default Overlay;

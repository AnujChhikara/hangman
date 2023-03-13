import React from "react";
const HEAD = (
  <div className=" absolute w-[50px] h-[50px] rounded-full border-red-700 border-[10px] top-[48px] right-[-20px]"></div>
);
const BODY = (
  <div className=" absolute w-[10px] h-[100px] bg-red-700  top-[96px] right-[0]"></div>
);
const RIGHTARM = (
  <div className=" absolute w-[100px] h-[10px] bg-red-700  top-[120px] rotate-[-30deg] right-[-90px]"></div>
);
const LEFTARM = (
  <div className=" absolute w-[100px] h-[10px] bg-red-700  top-[120px] rotate-[30deg] right-[1px] "></div>
);
const RIGHTLEG = (
  <div className=" absolute w-[100px] h-[10px] bg-red-700  top-[232px] rotate-[60deg] right-[-70px]"></div>
);
const LEFTLEG = (
  <div className=" absolute w-[100px] h-[10px] bg-red-700  top-[232px] rotate-[-60deg] right-[-20px]"></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative mt-4 ">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="bg-zinc-200 h-[50px] w-[10px] absolute top-0 right-0 "></div>
      <div className="bg-zinc-200 h-[10px] w-[200px] ml-[120px] "></div>
      <div className="bg-zinc-200 h-[400px] w-[10px] ml-[120px] "></div>
      <div className="bg-zinc-200 h-[10px] w-[250px]"></div>
    </div>
  );
}

export default HangmanDrawing;

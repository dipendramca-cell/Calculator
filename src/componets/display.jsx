import { useState } from "react";
import Buttons from "./buttons";
function Display() {
  const [value, setValue] = useState("");
  let valInput = value;

  return (
    <>
      <div className="flex justify-between px-3 items-center mt-2">
        <div className="text-left font-bold">ORBIT</div>
        <div className="text-right text-gray-400">
          <h1 className="text-[11px] font-semibold">ELECTRONIC CALCULATOR</h1>
          <p className="text-[10px]">MODEL 800</p>
        </div>
      </div>
      <div className="py-4 sm:py-6 bg-[#e9eef6] shadow mx-3 mt-3 rounded-xl">
        <p className="text-left px-3 text-[10px] text-gray-400">READY</p>
        <input
          id="display"
          type="text"
          className="rounded px-1 appearance-none [&::-webkit-inner-spin-button]:[-webkit-appearance:none] [&::-webkit-outer-spin-button]:[-webkit-appearance:none] [-moz-appearance:textfield] mx-1 w-[calc(100%-1rem)] p-1 text-4xl text-right focus:outline-none bg-[#e9eef6]"
          value={valInput}
          readOnly
        />
      </div>
      <Buttons setValue={setValue} valInput={valInput} />
    </>
  );
}
export default Display;

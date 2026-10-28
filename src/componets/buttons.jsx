import { useState } from "react";
import clickSound from "../assets/click.mp3"

function Buttons({ setValue, valInput }) {
  const buttonName = [
    "AC",
    "(",
    ")",
    "C",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
    "+",
  ];
  let [ErrorMssg, setMssg] = useState("");
  const errorHendlar = (ErrorMsg) => {
    setMssg(ErrorMsg);
  };
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };
  return (
    <>
      <p className="text-red-400 h-fit text-xs font-bold text-right mt-1 px-3">
        {ErrorMssg}
      </p>
      <div
        id="butt"
        className="m-2 mt-4  *:rounded-2xl *:text-center *:py-2 [&>button:not(.special)]:active:bg-gray-200 *:transform *:transition *:text-2xl *:text-gray-800 flex sm:gap-3 gap-2 flex-wrap justify-center *:capitalize sm:*:w-20 *:w-15 [&>button:not(.special)]:bg-gray-100 mb-5 *:h-15 sm:*:h-20 *:shadow-md select-none"
      >
        {buttonName.map((buttonr, indx) => {
          if (
            indx == 0 ||
            indx == 1 ||
            indx == 2 ||
            indx == 3 ||
            indx == 7 ||
            indx == 11 ||
            indx == 15 ||
            indx == 19
          ) {
            return (
              <button
                className="special bg-[#ffd7cf] active:bg-[#ffbfb1]"
                onClick={(event) => {playSound();
                  if (event.target.textContent != "=") {
                    errorHendlar(null);
                  }
                  if (event.target.textContent == "C") {
                    setValue(valInput.slice(0, -1));
                  } else if (event.target.textContent == "AC") {
                    setValue("");
                  } else {
                    setValue(valInput + event.target.textContent);
                  }
                }}
              >
                {buttonr}
              </button>
            );
          }
          return (
            <button
              onClick={(event) => {
                playSound();
                if (event.target.textContent != "=") {
                  errorHendlar(null);
                }
                if (event.target.textContent == "=") {
                  try {
                    let ans = String(eval(valInput));
                    setValue(ans);
                  } catch (error) {
                    setValue("ERROR");
                    errorHendlar(error.message);
                  }
                }
                if (event.target.textContent != "=") {
                  setValue(valInput + event.target.textContent);
                }
              }}
            >
              {buttonr}
            </button>
          );
        })}
      </div>
      <p className="text-center px-3 text-[10px] text-gray-400">
        MADE BY DIPENDRA SINGH RATHORE
      </p>
    </>
  );
}
export default Buttons;

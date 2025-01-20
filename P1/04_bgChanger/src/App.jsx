import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("maroon");
  // function changeColor(color) {
  //   setColor(color);
  // }
  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black  bg-white shadow-lg"
            >
              white
            </button>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-black bg-red-500 shadow-lg"
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black  bg-yellow-500 shadow-lg"
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-black  bg-green-500 shadow-lg"
            >
              Green
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-black  bg-blue-500 shadow-lg"
            >
              blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white  bg-black-500 shadow-lg"
            >
              black
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-22 rounded-full text-black bg-purple-400 shadow-lg"
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//traffic light \

// import React, { useState, useEffect } from "react";

// function App() {
//   const [color, setColor] = useState("red"); // Initial color is red
//   const [isRunning, setIsRunning] = useState(false); // To check if the cycle is running

//   useEffect(() => {
//     let timer;

//     if (isRunning) {
//       timer = setInterval(() => {
//         switch (color) {
//           case "red":
//             setColor("yellow");
//             break;
//           case "yellow":
//             setColor("green");
//             break;
//           case "green":
//             setColor("red");
//             break;
//           default:
//             break;
//         }
//       }, getColorDuration(color));
//     } else {
//       clearInterval(timer); // Stop the timer if the cycle is stopped
//     }

//     return () => clearInterval(timer); // Clean up the interval on unmount or restart
//   }, [color, isRunning]);

//   const getColorDuration = (color) => {
//     switch (color) {
//       case "red":
//         return 900; // 90 sec for red
//       case "yellow":
//         return 300; // 30 sec for yellow
//       case "green":
//         return 1200; // 120 sec for green
//       default:
//         return 0;
//     }
//   };

//   const startCycle = () => {
//     setIsRunning(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
//       <div
//         className={`w-32 h-32 rounded-full mb-4 ${
//           color === "red" ? "bg-red-600" : ""
//         } ${color === "yellow" ? "bg-yellow-500" : ""} ${
//           color === "green" ? "bg-green-600" : ""
//         }`}
//       />
//       <button
//         onClick={startCycle}
//         className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full"
//       >
//         Start
//       </button>
//     </div>
//   );
// }

// export default App;

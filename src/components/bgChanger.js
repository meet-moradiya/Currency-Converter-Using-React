import React, { useState } from "react";
import "./bgChanger.css";

function Button() {
    let [color, setColor] = useState("lightpink");

    return (
        <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
            <div id="main">
                <button onClick={() => setColor("red")} className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded">
                    Red
                </button>

                <button
                    onClick={() => setColor("green")}
                    className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
                >
                    Green
                </button>

                <button onClick={() => setColor("blue")} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                    Blue
                </button>

                <button
                    onClick={() => setColor("yellow")}
                    className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
                >
                    Yellow
                </button>

                <button
                    onClick={() => setColor("orange")}
                    className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded"
                >
                    Orange
                </button>

                <button onClick={() => setColor("pink")} className="bg-pink-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded">
                    Pink
                </button>

                <button
                    onClick={() => setColor("purple")}
                    className="bg-purple-500 hover:bg-purple-700 text-black font-bold py-2 px-4 rounded"
                >
                    Purple
                </button>
            </div>
        </div>
    );
}

export default Button;

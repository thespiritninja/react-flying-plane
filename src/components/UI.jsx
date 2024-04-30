import React, { useEffect, useState } from "react";
import "../index.css";
import imageW from "../assets/letter-w.png";
import imageS from "../assets/letter-s.png";
import imageA from "../assets/letter-a.png";
import imageD from "../assets/letter-d.png";

export const UI = () => {
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!pressedKeys.includes(event.key)) {
        setPressedKeys((prevState) => [...prevState, event.key]);
      }
    };

    const handleKeyUp = (event) => {
      setPressedKeys((prevState) =>
        prevState.filter((key) => key !== event.key)
      );
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="ui-div">
      <div className="steer-ui">
        <p className="control-heading">Bank controls</p>
        <div className="image-container">
          <img
            className={
              "button-image" + (pressedKeys.includes("w") ? " pressed" : "")
            }
            src={imageW}
            alt="W"
          />
          <img
            className={
              "button-image" + (pressedKeys.includes("s") ? " pressed" : "")
            }
            src={imageS}
            alt="S"
          />
        </div>
      </div>
      <div className="bank-ui">
        <p className="control-heading">Steer controls</p>
        <div className="image-container">
          <img
            className={
              "button-image" + (pressedKeys.includes("a") ? " pressed" : "")
            }
            src={imageA}
            alt="A"
          />
          <img
            className={
              "button-image" + (pressedKeys.includes("d") ? " pressed" : "")
            }
            src={imageD}
            alt="D"
          />
        </div>
      </div>
    </div>
  );
};

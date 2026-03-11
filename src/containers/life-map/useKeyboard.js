import {useState, useEffect} from "react";

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    boost: false
  });

  useEffect(() => {
    const handleKeyDown = e => {
      switch (e.code) {
        case "KeyW":
          setActions(prev => ({...prev, forward: true}));
          break;
        case "KeyS":
          setActions(prev => ({...prev, backward: true}));
          break;
        case "KeyA":
          setActions(prev => ({...prev, left: true}));
          break;
        case "KeyD":
          setActions(prev => ({...prev, right: true}));
          break;
        case "ShiftLeft":
          setActions(prev => ({...prev, boost: true}));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = e => {
      switch (e.code) {
        case "KeyW":
          setActions(prev => ({...prev, forward: false}));
          break;
        case "KeyS":
          setActions(prev => ({...prev, backward: false}));
          break;
        case "KeyA":
          setActions(prev => ({...prev, left: false}));
          break;
        case "KeyD":
          setActions(prev => ({...prev, right: false}));
          break;
        case "ShiftLeft":
          setActions(prev => ({...prev, boost: false}));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};

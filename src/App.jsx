import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [list, setList] = React.useState([]);
  const [undoList, setUndoList] = React.useState([]);

  const handleClick = ({ clientX, clientY }) => {
    setList((prev) => [...prev, { clientX, clientY }]);
  };

  const handleUndo = () => {
    const dotRemoved = list.pop();
    setUndoList((prev) => [...prev, dotRemoved]);
  };

  const handleRedo = () => {
    const dotRemoved = undoList.pop();
    setList((prev) => [...prev, dotRemoved]);
  };

  return (
    <>
      <header className="container-header flex-center">
        <h1 className="container-title">React Interview Challenge</h1>
        <div className="flex-center">
          <Button
            className="container-button-btn"
            texto="undo"
            onClick={handleUndo}
            disabled={list.length == 0}
          />
          <Button
            className="container-button-btn"
            texto="redo"
            onClick={handleRedo}
            disabled={undoList.length == 0}
          />
        </div>
      </header>
      <div className="container-main-content" onClick={handleClick}>
        {list.map((item, index) => (
          <span
            key={index}
            className="point"
            style={{ left: item.clientX, top: item.clientY }}
          />
        ))}
      </div>
    </>
  );
}

export default App;

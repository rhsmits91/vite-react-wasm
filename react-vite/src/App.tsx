import React, { useEffect } from "react";
import init, { start } from "../../engine/pkg";

const App: React.FC = () => {
  useEffect(() => {
    init().then(() => {
      console.log(start, "init wasm-pack");
      start && start();
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React + Wasm + Canvas</p>
        <canvas id="canvas" height="150" width="150" />
      </header>
    </div>
  );
};

export default App;

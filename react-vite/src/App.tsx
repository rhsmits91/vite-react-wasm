import React, { useEffect, useState } from "react";

const loader = import("../../engine/pkg");

const App: React.FC = () => {
  const [engine, setEngine] = useState<any>();

  useEffect(() => {
    loader.then((res) => setEngine(res)).catch(console.error);
  });

  if (!engine) return null;

  console.log(engine, "hi engine!");

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

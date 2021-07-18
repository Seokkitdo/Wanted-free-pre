import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header show={show} setShow={setShow} />
    </div>
  );
}

export default App;

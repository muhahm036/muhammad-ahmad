import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainComponent from "./mainComponent/MainComponent";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainComponent />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

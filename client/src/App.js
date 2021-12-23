import React from "react"
import "./App.css" // Added some styling
import Main from './Main';
import StartButton from "./components/StartButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<StartButton></StartButton>} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
      </>
    )
}
export default App
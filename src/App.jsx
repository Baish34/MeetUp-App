import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

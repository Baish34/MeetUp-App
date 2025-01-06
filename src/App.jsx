import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import EventDetails from "./pages/EventDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearch = (query) => {
    setSearchQuery(query);
 
  };

  return (
    <Router>
      <Header onSearch={handleSearch} /> 
      <Routes>
        <Route path="/" element={<MainSection searchQuery={searchQuery} />} /> 
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

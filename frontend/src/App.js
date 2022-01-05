import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import Show from "./routes/Show";
import Edit from "./routes/Edit";
import Add from "./routes/Add";
import Navbar from "./components/Navbar";
import { ImageProvider } from "./contexts/ImageContext";

const App = () => {
  return (
    <ImageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/show/:id" element={<Show />} />
            <Route path="/:id/edit" element={<Edit />} />
            <Route path="/new" element={<Add />} />
          </Routes>
        </div>
        <Toaster />
      </Router>
    </ImageProvider>
  );
};

export default App;

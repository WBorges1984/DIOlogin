import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Feed from "./pages/feed/feed";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    );
}
export default App;

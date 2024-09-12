import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Logging from "./components/Logging.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/logging' element={<Logging />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from "./pages/Login";
import {Dashboard} from "./pages/Dashboard";
import {Register} from "./pages/Register";
import {Detect} from "./pages/Detect";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/detect" element={<Detect />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
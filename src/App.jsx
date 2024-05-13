import React from "react";
import {  Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Home from './pages/Home';
import Login from './pages/Subscription';




function App() {
    const [loading, setLoading] = useState(false);
        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }, []);
    return ( 
        <div className = "App" > 
        {
            loading ? ( 
                <div style = { { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} >
                    <HashLoader 
                        color = { "#ff6600" }
                        loading = { loading }
                        size = { 100 }
                        aria-label = "Loading Spinner"
                        data-testid = "loader" />
                </div>) : (

              
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/home" exact element={<Home />} />
                        <Route path="login" exact element={<Login />} />
                    </Routes> 
            )
        } 
        </div>
    );
}

export default App;
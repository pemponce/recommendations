import './App.css';
import RegistrationPage from "./components/RegistrationPage";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import React from "react";



function Registration() {

  return (
      <html>
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"/>
      </head>
      <body>


      <div className="page">

        <div>
          <RegistrationPage/>
        </div>

      </div>
      </body>
      </html>
  )
}



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Registration/>}/>
        </Routes>
      </Router>
  );
}

export default App;

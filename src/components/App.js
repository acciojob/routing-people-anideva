
import React from "react";
import './../styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserLists from "./UserLists";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route
          path="/"
          element={<UserLists/>}
          />
          <Route
          path="/users/:id"
          element={<UserDetails/>}
         />
          </Routes>
          </BrowserRouter>
        
        
    </div>
  )
}

export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Login from "./Components/LoginPage";
import ListView from "./Components/ListViewPage";
import DetailView from "./Components/DetailViewPage";

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<ListView />} />
        <Route path="/posts/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
};
export default App;
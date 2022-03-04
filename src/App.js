import React from "react";
// import ReactDOM from "react-dom";
// import Todo from "./components/todoreact/todo";
// import Temp from "./components/weather/temp";
import Github from "./components/UseEffectApi/github";
// import Githubusersdetails from "./components/UseEffectApi/githubusersdetails";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

const App = () => {
  return (
    <div>
     {/* <Router>
      <Routes> 
        <Route path="/" element={<Github />} />
      </Routes>

      <Routes> 
        <Route path="/githubusersdetails" element={<GithubusersDeatails />} />
      </Routes>
    </Router> */}

      {/* <Todo />  */}
      {/* <Temp/> */}
      {/* <Loading /> */}
      <Github/>
    </div>

    
  );
};

export default App;

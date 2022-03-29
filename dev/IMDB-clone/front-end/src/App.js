import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import ActorLists from './routes/Actor/Actors.list'
import Creatactor from './routes/Actor/CreateActor'
import Navbar from "./components/Navbar";


function App() {
  return (
  <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path ='/Actor/add' element={<Creatactor />} />
        <Route path ='/Actor/' element={<ActorLists />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;

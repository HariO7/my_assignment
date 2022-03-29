import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Creatactor from './routes/Actor/CreateActor'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
function App() {
  return (
  <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path ='/actor/add' element={<Creatactor />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;

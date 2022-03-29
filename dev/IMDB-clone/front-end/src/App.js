import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import ActorLists from './routes/Actor/Actors.list'
import Creatactor from './routes/Actor/CreateActor'
import Navbar from "./components/Navbar";
import MovieLists from "./routes/Movie/movie.list";
import CreateMovie from "./routes/Movie/create.movie";
import CreateProducer from "./routes/producer/producer.create";
import ProducerLists from "./routes/producer/producer.lists";



function App() {
  return (
  <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path ='/' element={<MovieLists />} />
        <Route path ='/add' element={<CreateMovie />} />
        <Route path ='/Actor/' element={<ActorLists />} />
        <Route path ='/Actor/add' element={<Creatactor />} />
        <Route path ='/Producer' element={<ProducerLists />} />
        <Route path ='/Producer/add' element={<CreateProducer />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;

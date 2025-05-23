import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage2 from "./Pages/homepage2";
import Howtogetstarted from "./Pages/howtogetstarted";
import Login from "./Pages/login";
import Signup from "./Pages/signup";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage2/>}/>
        <Route path="/Howtogetstarted" element={<Howtogetstarted/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App;

import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/posts" element={<Homepage />}/>
        <Route path="/post/:id" element = {<Single />}/>
        <Route path="/write" element = {<Write />}/>
      </Routes>
    </Router>
  );
}

export default App;
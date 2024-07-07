import 'bootstrap/dist/css/bootstrap.css';
import NavbarC from './components/NavbarC';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Patterns from './pages/Patterns';
import Guides from './pages/Guides';
import Community from './pages/Community';

const patternData = [
  {
    title: "Peter the Penguin",
    type: "Animal",
    difficulty: "Easy",
    sewing: "Low",
    length: "1 hour",
    yarn: "Jumbo (7)",
    size: "small", 
    image: "/images/penguin.png"
  },
  {
    title: "Peter the Penguin",
    type: "Animal",
    difficulty: "Easy",
    sewing: "Low",
    length: "1 hour",
    yarn: "Jumbo (7)",
    size: "small",
    image: "/images/penguin.png"
  }
]

function App() {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patterns" element={<Patterns patternData={patternData} />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;

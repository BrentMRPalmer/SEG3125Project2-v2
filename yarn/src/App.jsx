import 'bootstrap/dist/css/bootstrap.css';
import NavbarC from './components/NavbarC';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Patterns from './pages/Patterns';
import Guides from './pages/Guides';
import Community from './pages/Community';
import Pattern from './pages/Pattern'

const patternData = [
  {
    id: 1,
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
    id: 2,
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
        <Route path="/pattern/:id" element={<Pattern patternData={patternData} />} />
      </Routes>
    </Router>
  );
}

export default App;

import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
import Service from './components/Service';


function App() {
  
  return (
    <BrowserRouter>
      <div className="m-10">
        <div className="py-5 border-3 border border-black/30">
          <Menu />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
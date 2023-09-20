import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipies" element={<Recipies/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

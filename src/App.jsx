import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Elections from "./Components/Elections";
import Login from "./Components/Login";
import HealthLeave from "./Components/HealthLeave";
import Permission from "./Components/Permission";
import Apply from "./Components/Apply";
import Cheating from "./Pages/Cheating";
import Content from "./Components/Content";
import Apply2 from "./Components/Apply2";
import About from './Pages/About';

function App() {
  return (
    <div className="bg-[#03045e] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Content />} />
        <Route path="/election" element={<Elections />} />
        <Route path="/leave" element={<HealthLeave />} />
        <Route path="/permit" element={<Permission />} />
        <Route path="/application" element={<Apply />} />
        <Route path="/applySecond" element={<Apply2 />} />
        <Route path="/cheat" element={<Cheating />} />
        
        {/* Render Apply and About side by side */}
        <Route
          path="/about"
          element={
           
             <> 
             <About /><Apply />
             
          </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

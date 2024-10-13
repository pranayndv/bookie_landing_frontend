import About from "./components/About";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full h-full pt-2 bg-black">
          <div className="w-full h-[100vh] ">
            <div className="p-6 rounded-t-3xl md:rounded-t-[3rem] bg-white">
              <Navbar />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/About" element={<About />} />
                <Route path="/ComingSoon" element={<ComingSoon />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;

import Home from "./components/Home";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNav from "./components/HomeNav";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <HomeNav />
        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path='/logowanie' element={<Login />} />;
          <Route path='/rejestracja' element={<Register />} />;
        </Routes>
      </Router>
    </>
  );
}

export default App;

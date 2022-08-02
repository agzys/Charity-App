import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNav from "./components/HomeNav";
import Login from "./components/Login";
import Register from "./components/Register";

const routes = {
  main: "/",
  login: "/logowanie",
  register: "/rejestracja",
};
function App() {
  return (
    <>
      <Router>
        <HomeNav />
        <Routes>
          <Route path={routes.main} element={<Home />} />;
          <Route path='/logowanie' element={<Login />} />;
          <Route path='/rejestracja' element={<Register />} />;
        </Routes>
      </Router>
    </>
  );
}

export default App;

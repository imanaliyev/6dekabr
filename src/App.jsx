import Navbar from "./Components/Layouts/Navbar";
import Details from "./Components/Page/Details";
import Home from "./Components/Page/Home";
import "./style.scss";

import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

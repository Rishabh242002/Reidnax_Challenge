import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Data from "./pages/data";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BarChart from "./charts/BarChart";
// import { ToggleProvider } from "./context/MyContext"
import Mystate from "./context/Mystate";

function App() {
  return (
    <Mystate>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/analytics" exact element={<Analytics />}></Route>
          <Route path="/data" exact element={<Data />}></Route>
          <Route path="/char" exact element={<BarChart />}></Route>
        </Routes>
      </BrowserRouter>
    </Mystate>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import InfoCard from "./Components/InfoCard/InfoCard";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="card/:id" element={<InfoCard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

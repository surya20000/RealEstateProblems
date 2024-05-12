import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Problems from "./components/Problems";
import AboutUs from "./components/AboutUs";
import ListProblems from "./components/ListProblems";
import ViewProblems from "./components/ViewProblems";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addProblems" element={<Problems />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/seeProblems" element={<ListProblems />} />
        <Route path="/viewProblems" element={<ViewProblems />} />
      </Routes>
    </>
  );
}

export default App;

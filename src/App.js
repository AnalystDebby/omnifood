import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/hero";
import { How } from "./components/how";
import { Meals } from "./components/meals";

function App() {
  return (
    <Routes className="font-normal leading-4 text-gray-800 font-[Rubik]">
      <Route path="/" element={<Hero />} />
      <Route path="/how" element={<How />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/how" element={<How />} />
      <Route path="/how" element={<How />} />
    </Routes>
  );
}

export default App;

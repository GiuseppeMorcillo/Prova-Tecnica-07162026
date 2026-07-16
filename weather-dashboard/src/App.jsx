import { BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Navbar from "../components/Navbar";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

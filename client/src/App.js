import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogReg from "./views/LogReg";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<LogReg/>} path="/"/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

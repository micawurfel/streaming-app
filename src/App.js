import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
// import "./components/Auth/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from "./components/Auth/Login";
// import { Register } from "./components/Auth/Register";
// import { AuthProvider } from "./context/authContext";
import HomePage from "./components/Main/HomePage";


function App() {
  return (
    <div>

      {/* <AuthProvider> */}
        
        <Router>
          <Routes>
            
            <Route path="/" element={ <HomePage/> }/> 
            {/*
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
          </Routes>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;

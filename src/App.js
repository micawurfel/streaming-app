import './App.css';
import './complements/style.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import {Login} from './complements/Login';
import {Register} from './complements/Register';
import {Home} from './complements/Home';

import {AuthProvider} from './context/authContext';



function App() {
  return (

    <AuthProvider>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/> 
        </Routes>
      </Router>

    </AuthProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './Components/Quiz';
import Welcome from './Components/Welcome';
import RegisterForm from './Components/Newreg';
import Levels from './Components/Levelspg';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const [registeredName, setRegisteredName] = useState('');
  
  const handleRegister = (player) => {
    setRegisteredName(player);
  };

  return (
    <BrowserRouter>
    <div>
      <Navbar />
    </div>
    <div>
        <Routes>
            <Route path="/" element={<RegisterForm onRegister={handleRegister} />}/>
            <Route path="/welcome" element={<Welcome player={registeredName} />}/> 
            <Route path= "/levelpg" element={<Levels />}/>
            <Route path= "/quiz" element={<Quiz />}/> 
          
        </Routes>
        
      </div>
    </BrowserRouter> 
  );
}

export default App;

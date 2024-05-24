import './App.css';
import Quiz from './Components/Quiz';
import Welcome from './Components/Welcome';
import RegisterForm from './Components/Newreg';

function App() {
  const [registeredName, setRegisteredName] = useState('');
  
  const handleRegister = (player) => {
    setRegisteredName(player);
  };

  return (
    
    <div className="App">
     
    </div>
  );
}

export default App;

import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Quiaz from './Components/Quiaz';



function App() {
  return (
    <div className="App">
      {/* <Test /> */}
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiaz' element={<Quiaz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Add from './Components/Add'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/add' element={<Add></Add>} />
     </Routes>
    </BrowserRouter>

  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar  from './components/navbar/Navbar'
import Home from './routers/home/Home'
import About from './routers/about/About'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;

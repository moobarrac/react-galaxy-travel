import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

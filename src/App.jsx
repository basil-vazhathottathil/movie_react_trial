import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import './css/App.css'; // Add this line

function App() {
  const movieno=1;
  return (
    <div>
      <NavBar/>
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
    </div>
  )
}
export default App

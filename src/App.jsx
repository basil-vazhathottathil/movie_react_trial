import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites';

function App() {
  const movieno=1;
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
  )
}
export default App

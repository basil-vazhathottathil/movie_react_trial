import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  const movieno=1;
  return (
    <>
      {movieno===1 ?(<MovieCard movie={{title: 'The Dark Knight',release_date: '2008'}}/>
      ):(<MovieCard movie={{title: 'The king',release_date: '2008'}}/>)}
    </>
  )
}
export default App

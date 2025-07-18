import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from "./MovieCard"
import Layout from './Layout'
import MovieDetail from './MovieDetail'
import SearchPage from './searchPage'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MovieCard/>}/>
          <Route path='detail/:id' element={<MovieDetail/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Route>
      </Routes>
    </>
  )
}


export default App

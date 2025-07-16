import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from "./MovieCard"
import Layout from './Layout'
import MovieDetail from './MovieDetail'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MovieCard/>}/>
          <Route path='detail/:id' element={<MovieDetail/>}/>
        </Route>
      </Routes>
    </>
  )
}


export default App

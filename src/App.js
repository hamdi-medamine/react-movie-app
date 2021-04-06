import './App.css'
import React,{useState} from 'react'
import {data} from './components/Data'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Search from './components/Search'
import AddMovie from './components/AddMovie'

function App() {
  
  const [movies, setMovies] = useState(data)
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(1)
  const [newMovie, setNewMovie] = useState({
  title: "",
  rate: "",
  description: "",
  img:"",
})
const Add = () =>{
  setMovies(
    [...movies,newMovie],
  )
  
}
   return (
    <div>
      <Header/>
     <Search setSearch={setSearch} setStar={setStar}  />
     <AddMovie Add={Add} newMovie={newMovie} setNewMovie={setNewMovie}/>

     <MovieList search={search} movies={movies.filter(elt=>elt.title.toLowerCase().trim().includes(search.toLowerCase().trim())&& elt.rate>=star)} setMovies={setMovies} />
    

    
    </div>
  );
}

export default App;

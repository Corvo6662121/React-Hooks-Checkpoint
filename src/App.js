import React, {useState} from 'react';
import { moviesData } from './Data';
import './App.css';
import MovieList from './Components/MovieList';
import Search from './Components/Search';
import AddMovie from './Components/AddMovie';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle]= useState("")
  const [searchRating, setSearchRating]= useState(0)

  const handleMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
console.log(movies)
  return (
   <div>
     <Search setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
     <h1 style={{color: "red"}}>My Anime Tier-List:</h1>
     <h3 style={{color: "grey"}}> This is my personal tier list of my top 5 Animes :</h3>
     <ol>
       <li style={{color: "red"}}>Berserk</li>
       <li style={{color: "red"}}>Redline</li>
       <li style={{color: "red"}}>Devilman Crybaby</li>
       <li style={{color: "red"}}>Neon Genesis Evangelion</li>
       <li style={{color: "red"}}>Demon Slayer</li>
     </ol>
     

     <AddMovie handleMovie={handleMovie} />
     <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />
   </div>
  );
}

export default App;

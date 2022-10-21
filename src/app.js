import {useState,useEffect} from "react";
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL='http://www.omdbapi.com?apikey=c22fba86';



const App =()=>{
    const [movies , setMovies] = useState([]);
    const [searchTerm, setSearchTerm]= useState('')


    const searchMovies = async(title)=>{
        const Response = await fetch(`${API_URL}&s=${title}`);
        const data= await Response.json();
        setMovies(data.Search );

    }
    useEffect(()=>{
        searchMovies('spiderman');
    },[]);
    return (
        <div className="app">
          <h1>MovieLand</h1>
          <div className="search">
             <input
               placeholder="Search fro movies"
               value={searchTerm}
               onChange={(e)=>setSearchTerm(e.target.value)}
             />
             <img 
               src={SearchIcon}
               alt="search"
               onClick={()=> searchMovies(searchTerm)}
             />
          
            </div>
            { movies?.length > 0
                ? (
                <div className="container">
                    {
                    movies.map((movie)=>(
                        <MovieCard  movie={movie}/>
                    ))
                     } 
                </div>

                ): (
                <div className="empty">
                   <h2> no movie found</h2>
                </div>
                )

            }


          
        </div>
        
    )

}
export default App;
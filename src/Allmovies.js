import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import Header from './Header';



function Allmovies(){
const [movies,setMovies]=useState([]);
    const getAllMovies = (setMovies) => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
          .then((response) => response.json())
          .then((json) => {
            setMovies(json);
            //console.log(movies);
           // console.log(json);
            

          });
      };
    
    useEffect(()=>{
    getAllMovies(setMovies);
    
    
    },[])



    return <>
    <Header/>
    <div  className='parent'>
        {
            movies.map((movie,index)=>{
                return <Movie movie={movie} key={index} />
            
            })
            
        }
    </div>
    </>
}
export default Allmovies;
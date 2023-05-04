import React from 'react'
import { Link } from 'react-router-dom';
function Movie({movie}){

   const getimage=()=>{
    if(movie.show.image!=null){
        return movie.show.image.medium;
    }
    else{
        return 'https://th.bing.com/th/id/R.a9b72aad15888a48da93add5b6a2340f?rik=OVVeFzGq2HdGCQ&riu=http%3a%2f%2ferrantscience.com%2fwp-content%2fuploads%2fImage-not-found.jpg&ehk=hjNlSDv%2bTPmy9xjCu5F46YlP3U4T1ddLiQvhwUwCfe0%3d&risl=&pid=ImgRaw&r=0'
    }

   }
    
    return<div className='item'>
       <h2 className='h2-movie'>{movie.show.name}</h2>  
       <img src={getimage()}/>  
       <div className='info'>
       <p className='p-movie'>{movie.show.language}</p>
       <p className='p-movie'>{movie.show.status}</p>
       <p className='p-movie'>{movie.show.genres[0]}</p>

       </div>
    
     <div className='btn'>
     <Link to={'/view'} state={{movie:movie}}><button>View</button></Link>
     <Link to={'/book'} state={{movie:movie}}><button>Book</button></Link>
     </div>
    </div>
}
export default Movie;
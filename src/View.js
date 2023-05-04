import React from "react";
import { useLocation } from "react-router-dom";

function View(){
    const location=useLocation();
    const {movie}=location.state;
    console.log(movie);

    const getimage=()=>{
        if(movie.show.image!=null){
            return movie.show.image.medium;
        }
        else{
            return 'https://th.bing.com/th/id/R.a9b72aad15888a48da93add5b6a2340f?rik=OVVeFzGq2HdGCQ&riu=http%3a%2f%2ferrantscience.com%2fwp-content%2fuploads%2fImage-not-found.jpg&ehk=hjNlSDv%2bTPmy9xjCu5F46YlP3U4T1ddLiQvhwUwCfe0%3d&risl=&pid=ImgRaw&r=0'
        }
    
       }
       const getCountry=()=>{
        if(movie.show.network!=null){
            return movie.show.network.country.name;
        }
        else{
            return 'Not Found'
        }
    
       }
    
    return <div className="view">
    <h2 className="view-h2">{movie.show.name}</h2>
    <img src={getimage()}/> 
    <h3 className="view-h3">Summary</h3>
    <p className="view-para">{movie.show.summary}</p>
    <div className="more">
        
            <span> <i>Country</i> {getCountry()}</span>
            <span> <i>Status</i> {movie.show.status}</span>
            <span> <i>Average Runtime</i> {movie.show.averageRuntime}</span>
            
    </div>
    
    </div>
}
export default View;
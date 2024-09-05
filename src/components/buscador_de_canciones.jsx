import React, {useEffect, useState} from "react"
import SongForm from "./formulario_De_Cancion";
import SongDetail from "./detalles_de_Cancion";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";


const SongSearch =()=> {
    
    const [search, setSearch ]= useState (null);
    const [lyric , setLyrics ]= useState (null); 
    const [bio , setBio ]= useState (); 
    //const [loading , setLoading ]= useState (null); 

   

    useEffect (()=>{
    if (search === null) return;
    const {artist,song} = search ;

    const fetchData = async() =>{
        
        const {artist, song} = search ;
        const artistUrl= `https://www.theaudiodb.com/api/v1/json/{APIKEY}/discography.php?s=${artist}`;  
        const songUrl= `https://api.lyrics.ovh/v1/${artist}/${song }` ;
        //console.log (songUrl);

        const [artistRes,songRes]= await Promise.all([
            helpHttp().get(artistUrl),
            helpHttp().get(songUrl),
        ]);

        setBio(artistRes);
        setLyrics(songRes.lyrics)

        console.log (artistRes, songRes.lyrics)
        

        
        }
        fetchData();

},[search]);





    const handleSearche = (data)=> {
        console.log (data)
        setSearch (data); 
    };

return (
<div>
    <Loader/>
    <h2> Buscador de canciones </h2>
    <SongForm handleSearche={handleSearche}/>
   
    <SongDetail search={search} lyric={lyric} bio={bio} /> 
</div>
);
};

export default SongSearch ;
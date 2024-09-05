import Message from "./Message"
import LetraCancion from "./letra_Cancion"
import SongArtist from "./song_artist"


const SongDetail = ({search,lyric,bio}) => { 
    //if(!lyrics||!bio) return null;
    return (
            <div> 
                <h2> </h2>
                <SongArtist/>
                <LetraCancion search={search} lyric={lyric}/>

            </div>
    )
}

export default SongDetail
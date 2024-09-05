import { useState } from "react"

const initialForm= {
    artist:"",
    song: ""
}

const SongForm = ({handleSearche}) => {


    const [form, setForm] = useState (initialForm);

    const handleChange= (e) =>{
        setForm (
            {...form, [e.target.name] : e.target.value, }
        )
        };
    
    const handleSubmit =(e) => {
        e.preventDefault();
        if (!form.artist||!form.song) {alert ("Rellene todos los campos")
        return;} 

        handleSearche(form);
        setForm (initialForm);

    }
    
    console.log (form);

    return (
            <div> 
                <form onSubmit={handleSubmit}> 
                    <input type="text" name="artist" placeholder="Nombre del Interprete" onChange={handleChange} value={form.artist}/>
                    <input type="text" name="song" placeholder="Nombre de la Canción" onChange={handleChange} value={form.song}/>
                    <input type="submit" value="Enviar"  />
                </form>
                <h2> Song search  </h2>
            </div>
    )
}

export default SongForm
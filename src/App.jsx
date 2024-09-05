import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SongSearch from './components/buscador_de_canciones'
import SongForm from './components/formulario_De_Cancion'
import SongDetail from './components/detalles_de_Cancion'
import SongArtist from './components/song_artist'





function App() {
  

  return (
    <>
      <div>
        
        <SongSearch/>
        
      </div>
      
    </>
  )
}

export default App

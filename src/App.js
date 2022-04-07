import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material'
import EnterUsername from './screens/EnterUsername/EnterUsername'
import Home from './screens/Home/Home'
import { styles } from './theme'
import { useEffect, useState } from "react";
import Sound from "./components/SoundManager/SoundManager";
import sounds from './components/SoundManager/sounds'


function App() {

  const [name, setName] = useState("Player")
  const [difficulty, setDifficulty] = useState(40)
  const [music, setMusic] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentSoundEffect, setCurrentSoundEffect] = useState(sounds.background)
  const [musicLoop, setMusicLoop] = useState(true)

  const setSound = (soundEffect, loop) => {
    setCurrentSoundEffect(soundEffect)
    loop ? setMusicLoop(loop) : setMusicLoop(true)
    console.log(loop)
  }

  return (
    <Box sx={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnterUsername setLoading={setLoading} setName={setName} difficulty={difficulty} setDifficulty={setDifficulty} music={music} setMusic={setMusic} setSoundEffect={setCurrentSoundEffect} />} />
          <Route path="/home" element={<Home loading={loading} setLoading={setLoading} name={name} difficulty={difficulty} music={music} setSound={setSound} />} />
        </Routes>
      </BrowserRouter>
      {music &&
        <Sound
          soundEffect={currentSoundEffect}
          loop={musicLoop}
        />}
    </Box>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material'
import EnterUsername from './screens/EnterUsername/EnterUsername'
import Home from './screens/Home/Home'
import { styles } from './theme'
import { useEffect, useState } from "react";

function App() {

  return (
    <Box sx={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnterUsername />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

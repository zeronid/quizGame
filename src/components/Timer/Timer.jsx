import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import styles from './styles'
import Swing from 'react-reveal/Swing';


function Timer({ handleHighScore, setGameOver, restart, difficulty }) {

    let interval
    const [timeLeft, setTimeLeft] = useState(difficulty)

    const handleTime = () => {
        if (timeLeft > 0) {
            setTimeLeft(prev => prev - 1)
        } else {
            clearInterval(interval)
            handleHighScore()
            setGameOver(true)
        }
    }

    useEffect(() => {
        interval = setInterval(() => handleTime(), 1000);
        return () => clearInterval(interval)
    }, [timeLeft, restart])

    return (
        <Box sx={styles.timer}>
            <Swing spy={timeLeft}>{timeLeft}</Swing>
        </Box>
    )
}

export default Timer
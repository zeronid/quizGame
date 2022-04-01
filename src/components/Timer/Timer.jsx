import React from 'react'
import { Box } from '@mui/material'
import styles from './styles'
import Flip from 'react-reveal/Flip';

function Timer({ time }) {
    return (
        <Box sx={styles.timer}>
            <Flip>{time}</Flip>
        </Box>
    )
}

export default Timer
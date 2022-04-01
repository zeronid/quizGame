import { Typography } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme'

function Text({ text, size, color }) {
    return (
        <Typography sx={{
            fontWeight: 'bold',
            color: color === undefined ? Colors.text : color,
            fontSize: size === undefined ? '16px' : size,
        }}
        >
            {text}
        </Typography>
    )
}

export default Text
import React from 'react'
import { Box } from '@mui/material'
import styles from './styles'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Text from '../Text/Text'

function Score({ score, name }) {
    return (
        <>
            <Box sx={styles.container}>
                <Text text={name} size="30px" />
                <Text text={"Points: " + score} size="30px" />
                <Link to="/"><Button text="Change Settings" /></Link>
            </Box >
        </>
    )
}

export default Score
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Grid, Box, Typography } from '@mui/material'
import Button from '../Button/Button'
import Text from '../Text/Text'

function Question({ question, correctAnswer, wrongAnswers, handleClick }) {

    const [answers, setAnswers] = useState([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5))

    useEffect(() => {
        setAnswers([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5))
    }, [question])

    return (
        <Box sx={styles.container}>
            <Box sx={styles.question}>
                <Text text={question} size="30px" />
            </Box>
            <Grid container sx={styles.questions}>
                {answers.map((q, i) => {
                    return (
                        <Grid item key={i}>
                            <Button text={q} onClick={handleClick} onClickParams={q} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Question
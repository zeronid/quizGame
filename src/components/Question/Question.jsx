import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Grid, Box } from '@mui/material'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Fade from 'react-reveal/Fade';

function Question({ question, correctAnswer, wrongAnswers, handleClick }) {

    const [answers, setAnswers] = useState([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5))

    useEffect(() => {
        setAnswers([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5))
    }, [question])

    return (
        <Box sx={styles.container}>
            <Fade spy={question}>
                <Box sx={styles.question}>
                    <Text text={atob(question)} size="30px" />
                </Box>
                <Grid container sx={styles.questions}>
                    {answers.map((q, i) => {
                        return (
                            <Grid item key={q}>
                                <Button text={atob(q)} onClick={handleClick} onClickParams={q} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Fade>
        </Box>
    )
}

export default Question
import React, { useEffect, useState } from 'react'
import { getQuestions } from '../../api/api'
import { Grid, Box, Typography } from '@mui/material'
import styles from './styles'
import Question from '../../components/Question/Question'
import Timer from '../../components/Timer/Timer'
import Score from '../../components/Score/Score'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'

function Home() {

    const [questions, setQuestions] = useState(false)
    const [timeLeft, setTimeLeft] = useState(20)
    const [gameOver, setGameOver] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [restart, setRestart] = useState(false)
    const [score, setScore] = useState(0)
    let interval

    useEffect(() => {
        const getData = async () => {
            getQuestions().then(res => {
                setQuestions(res.data.results)
                setGameOver(false)
                setScore(0)
            })
        }
        getData()
    }, [restart])

    useEffect(() => {
        interval = setInterval(() => handleTime(), 1000);
        return () => clearInterval(interval)
    }, [timeLeft, restart])

    const handleTime = () => {
        if (timeLeft > 0) {
            setTimeLeft(prev => prev - 1)
        } else {
            clearInterval(interval)
            setGameOver(true)
        }
    }

    const handleClick = (answer) => {
        if (answer === questions[questionNumber].correct_answer) {
            //Move to the next question
            setQuestionNumber(prev => prev + 1)
            handleScore()
            setTimeLeft(20)
        } else {
            //Game over
            setGameOver(true)
        }
    }

    const handleScore = () => {
        if (timeLeft > 15) {
            setScore(prev => prev + 6)
        } else if (timeLeft > 10) {
            setScore(prev => prev + 4)
        } else {
            setScore(prev => prev + 2)
        }
    }

    const handleRestart = () => {
        setTimeLeft(20)
        setRestart(prev => !prev)
    }

    return (
        <Box sx={styles.outerContainer}>
            {questions && !gameOver &&
                <Box sx={styles.innerContainer}>
                    <Score score={score} name="Alex" />
                    <Timer time={timeLeft} />
                    <Question
                        question={questions[questionNumber].question}
                        correctAnswer={questions[questionNumber].correct_answer}
                        wrongAnswers={questions[questionNumber].incorrect_answers}
                        handleClick={handleClick}
                    />
                </Box>
            }
            {gameOver &&
                <Box sx={styles.innerContainer}>
                    <Text text="Game Over !" size="100px" />
                    <Text text={"Score: " + score} />
                    <Button text="Restart?" width="200px" height="50xp" onClick={handleRestart} />
                </Box>
            }
        </Box>
    )
}

export default Home
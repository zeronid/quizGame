import React, { useEffect, useState } from 'react'
import { getQuestions } from '../../api/api'
import { Box, CircularProgress } from '@mui/material'
import styles from './styles'
import Question from '../../components/Question/Question'
import Timer from '../../components/Timer/Timer'
import Score from '../../components/Score/Score'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import sounds from '../../components/SoundManager/sounds'

function Home({ name, difficulty, setSound, loading, setLoading }) {

    const [questions, setQuestions] = useState(false)
    const [timeLeft, setTimeLeft] = useState(difficulty)
    const [gameOver, setGameOver] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [restart, setRestart] = useState(false)
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)



    useEffect(() => {
        const getData = async () => {
            getQuestions(difficulty).then(res => {
                setQuestions(res)
                setGameOver(false)
                setScore(0)
                setLoading(false)
                setSound(sounds.tick)
            }).catch(e => {
                console.log(e)
            })
        }
        getData()
    }, [restart])

    const handleClick = async (answer) => {
        if (answer === questions[questionNumber].correct_answer) {
            //Move to the next question
            if (questions.length === questionNumber) {
                await getQuestions(difficulty).then(res => {
                    setQuestions(res)
                    setQuestionNumber(0)
                })
            } else {
                setQuestionNumber(prev => prev + 1)
            }
            handleScore()
            setTimeLeft(difficulty)
        } else {
            //Game over
            handleHighScore()
            setGameOver(true)
            setSound(sounds.gameOver, false)
        }
    }

    const handleHighScore = () => {
        if (score > highScore) {
            setHighScore(score)
        }
    }

    const handleScore = () => {
        if (timeLeft > difficulty - (difficulty / 4)) {
            setScore(prev => prev + 6)
        } else if (timeLeft > difficulty - (difficulty / 2)) {
            setScore(prev => prev + 4)
        } else {
            setScore(prev => prev + 2)
        }
    }

    const handleRestart = () => {
        setSound(null)
        setLoading(true)
        setTimeLeft(difficulty)
        setRestart(prev => !prev)
    }

    return (
        <Box sx={styles.outerContainer}>
            {questions && !gameOver && !loading &&
                <Box sx={styles.innerContainer}>
                    <Score score={score} name={name} />
                    <Timer
                        timeLeft={timeLeft}
                        setTimeLeft={setTimeLeft}
                        handleHighScore={handleHighScore}
                        setGameOver={setGameOver}
                        restart={restart}
                        difficulty={difficulty}
                    />
                    <Question
                        question={questions[questionNumber].question}
                        correctAnswer={questions[questionNumber].correct_answer}
                        wrongAnswers={questions[questionNumber].incorrect_answers}
                        handleClick={handleClick}
                    />
                </Box>
            }
            {gameOver && !loading &&
                < Box sx={styles.innerContainer}>
                    <Text text="Game Over !" size="100px" />
                    <Text text={"Current Score: " + score} />
                    <Text text={"High Score: " + highScore} />
                    <Button text="Try Again!" width="200px" height="50xp" onClick={handleRestart} />
                </Box>
            }
            {
                loading &&
                <CircularProgress size={100} />
            }
        </Box >
    )
}

export default Home
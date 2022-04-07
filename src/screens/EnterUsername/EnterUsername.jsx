import React, { useRef, useEffect } from 'react'
import { Grid, TextField, Select, MenuItem } from '@mui/material'
import styles from './styles'
import { Link } from "react-router-dom";
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button'
import sounds from '../../components/SoundManager/sounds'


function EnterUsername({ setName, difficulty, setDifficulty, music, setMusic, setLoading, setSoundEffect }) {

    useEffect(() => {
        setSoundEffect(sounds.background)
    })

    const nameRef = useRef(null)

    const handleChange = (event) => {
        setDifficulty(event.target.value);
    };

    const handleMusicChange = (event) => {
        setMusic(event.target.value)
    }

    const handleClick = () => {
        nameRef?.current?.value !== "" ? setName(nameRef.current.value) : setName("Player")
        setSoundEffect(null)
        setLoading(true)
    }

    return (
        <Grid container sx={styles.container}>
            <Grid item>
                <Text text="Please enter your name" size="50px" />
            </Grid>
            <Grid item>
                <TextField inputRef={nameRef} margin="normal" sx={styles.textField} />
            </Grid>
            <Grid item sx={styles.difficulty}>
                <Text text={"Difficulty: "} size="30px" />
                <Select sx={styles.select} value={difficulty} onChange={handleChange}>
                    <MenuItem value={40}>Easy</MenuItem>
                    <MenuItem value={25}>Medium</MenuItem>
                    <MenuItem value={15}>Hard</MenuItem>
                </Select>
            </Grid>
            <Grid item sx={styles.difficulty}>
                <Text text={"Sound: "} size="30px" />
                <Select sx={styles.select} value={music} onChange={handleMusicChange}>
                    <MenuItem value={false}>Off</MenuItem>
                    <MenuItem value={true}>On</MenuItem>
                </Select>
            </Grid>
            <Grid item>
                <Link to="/home">
                    <Button text="Start" onClick={() => handleClick()} />
                </Link>
            </Grid>
        </Grid >
    )
}

export default EnterUsername
import React, { useRef } from 'react'
import { Grid, TextField } from '@mui/material'
import styles from './styles'
import { Link } from "react-router-dom";
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button'

function EnterUsername() {

    const nameRef = useRef('')

    return (
        <Grid container sx={styles.container}>
            <Grid item>
                <Text text="Please enter your name :)" size="50px" />
            </Grid>
            <Grid item>
                <TextField inputRef={nameRef} margin="normal" sx={styles.textField} />
            </Grid>
            <Grid item>
                <Link to={{ pathname: "/home", state: { name: nameRef } }}>
                    <Button text="Start">Start</Button>
                </Link>
            </Grid>
        </Grid >
    )
}

export default EnterUsername
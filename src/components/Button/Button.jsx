import React from 'react'
import styles from './styles'

function Button({ text, onClick, onClickParams }) {
    return (
        <button style={styles.button} onClick={onClickParams === undefined ? () => onClick() : () => onClick(onClickParams)}>
            {text}
        </button >
    )
}

export default Button
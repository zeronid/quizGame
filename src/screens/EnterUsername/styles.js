import { Colors } from '../../theme'

const styles = {
    container: {
        width: "100vw",
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    welcomeText: {
        color: Colors.text,
        fontSize: 50
    },
    textField: {
        width: '30vw',
    },
    button: {
        backgroundColor: Colors.text,
        color: Colors.main,
        marginTop: '20px',
        width: '20vw',
        height: '10vh'
    },
    difficulty: {
        display: 'flex',
        alignItems: 'center',
        gap: 2
    },
    select: {
        width: '150px',
        textAlign: 'center'
    }
}

export default styles
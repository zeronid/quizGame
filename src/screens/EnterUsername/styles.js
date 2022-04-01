import { Colors } from '../../theme'

const styles = {
    container: {
        backgroundColor: Colors.main,
        width: "100vw",
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        color: Colors.text,
        fontSize: 50
    },
    textField: {
        borderColor: Colors.text,
        width: '30vw',
        fontSize: 30
    },
    button: {
        backgroundColor: Colors.text,
        color: Colors.main,
        marginTop: '20px',
        width: '20vw',
        height: '10vh'
    }
}

export default styles
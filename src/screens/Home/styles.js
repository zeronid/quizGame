const styles = {
    outerContainer: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3
    },
    questions: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    timer: {
        position: 'absolute',
        top: 50,
        right: 50
    },
    gameOverText: {
        fontSize: '100px',
        fontWeight: 'bold',
        marginBottom: '25px'
    }
}

export default styles
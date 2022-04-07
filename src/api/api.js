import axios from 'axios'

export const getQuestions = async (difficulty) => {
    let questions = await axios.get("https://opentdb.com/api.php?amount=50&encode=base64")
    switch (difficulty) {
        case 40:
            questions = questions.data.results.filter(item => atob(item.difficulty) === "easy" || atob(item.difficulty) === "medium")
            break
        case 25:
        case 15:
            questions = questions.data.results.filter(item => atob(item.difficulty) === "medium" || atob(item.difficulty) === "hard")
            break
        default:
            questions = questions.data.results
            break
    }
    return questions
}
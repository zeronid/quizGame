import axios from 'axios'

export const getQuestions = async () => {
    const questions = await axios.get("https://opentdb.com/api.php?amount=50&encode=base64")
    return questions
}
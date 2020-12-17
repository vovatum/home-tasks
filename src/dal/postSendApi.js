import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`,
})

const tryCatch = async (f) => {
    try {
        // const response =
        await f()
        // console.log('answer: ', response.data)
        return true
    } catch (e) {
        // console.log('error: ', {...e})
        return false
    }
}

export const postSend = (isDone) => {
    return tryCatch(() => instance.post('', {success: isDone}))
}

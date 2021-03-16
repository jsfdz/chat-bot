import { KEY2 } from "../config/key.js"

const BASE = 'https://www.cleverbot.com/getreply?'

export const getBot = async (message) => {
    let response = await fetch(`${BASE}key=${KEY2}&input=${message}`)
    let success = response && response.ok
    if (success) {
        let data = await response.json()
        return data
    }
}
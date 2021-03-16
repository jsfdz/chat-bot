import { getBot } from "../helpers/api.js"
import { appendMessage } from "./template.js"

const $form = document.querySelector('form')
const $messages = document.querySelector('.msger-chat')

export const bot = () => {

    const toBottom = () => {
        $messages.scrollTo({
            left: 0,
            top: $messages.scrollHeight - $messages.clientHeight,
            behavior: 'smooth'
        })
    }

    $form.addEventListener('submit', (e) => {
        e.preventDefault()
        let message = e.target[0].value
        if (message !== '') {
            appendMessage('right', message)
            getBot(message).then(data => {
                if (data.error) {
                    appendMessage('left', `Sorry :( ${data.error}`)
                } else {
                    appendMessage('left', data.output)
                }
                toBottom()
            })
            e.target[0].value = ''
            toBottom()
        }
    })
}
const $messages = document.querySelector('.msger-chat')

export const appendMessage = (side, text) => {
    const name = side === 'left' ? 'JsFdz' : 'Tu'
    const image = side === 'left' ? './assets/img/me.jpg' : './assets/img/you.jpg'
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    let temp = '' + ((hour > 12) ? hour - 12 : hour)

    console.log(temp);

    if (hour == 0) {
        temp = '12'
    }

    temp += ((minute < 10) ? ':0' : ':') + minute
    // temp += ((second < 10) ? ':0' : ':') + second
    temp += (hour >= 12) ? ' pm' : ' am'

    console.log(temp)

    $messages.innerHTML += `
    <div class="msg ${side}-msg">
    <div class="msg-img" style="background-image: url(${image})">
    </div>

    <div class="msg-bubble">
        <div class="msg-info">
            <div class="msg-info-name"><span>@</span>${name}</div>
            <div class="msg-info-time">${temp}</div>
        </div>

        <div class="msg-text">
            ${text}
        </div>
    </div>
</div>
    `
}
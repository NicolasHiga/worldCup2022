let to = new Date('nov 20 2022 13:00:00')

function update() {
    let from = new Date();
        diff = to - from,
        days = setTwoDigit(Math.floor(diff/1000/60/60/24)),
        hours = setTwoDigit(Math.floor(diff/1000/60/60)%24),
        min = setTwoDigit(Math.floor(diff/1000/60)%60),
        document.querySelector('#days').innerText = days
        document.querySelector('#hours').innerText = hours
        document.querySelector('#min').innerText = min
}

let interval = setInterval(update, 1000)

function setTwoDigit(argument) {
    return argument > 10 ? argument : '0' + argument
}
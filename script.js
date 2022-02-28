let inTimezone = document.getElementById('timezone')

let outDay = document.getElementById('day')
let outHours = document.getElementById('hour')
let outMinutes = document.getElementById('minute')
let outSeconds = document.getElementById('second')

function update() {
  setInterval(() => {
    let date = new Date()
    let utcDay = date.getUTCDate()
    let utcHour = date.getUTCHours()

    let timezone = inTimezone.value

    switch (timezone) {
      case 'new-york':
        timezone = -5
        break
      case 'sao-paulo':
        timezone = -3
        break
      case 'london':
        timezone = 0
        break
      case 'paris':
        timezone = 0
        break
      case 'kyiv':
        timezone = +2
        break
      case 'moscow':
        timezone = +3
        break
      case 'beijing':
        timezone = +8
        break
      case 'tokyo':
        timezone = +9
        break
    }

    date.setDate(utcDay)
    date.setHours(utcHour + timezone)

    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let dayOfWeek = date.getDay()
    let month = date.getMonth()
    let dayOfMonth = date.getDate()
    let year = date.getFullYear()

    switch (dayOfWeek) {
      case 0:
        dayOfWeek = 'Sunday'
        break
      case 1:
        dayOfWeek = 'Monday'
        break
      case 2:
        dayOfWeek = 'Tuesday'
        break
      case 3:
        dayOfWeek = 'Wednesday'
        break
      case 4:
        dayOfWeek = 'Thursday'
        break
      case 5:
        dayOfWeek = 'Friday'
        break
      case 6:
        dayOfWeek = 'Saturday'
        break
    }

    switch (month) {
      case 0:
        month = 'January'
        break
      case 1:
        month = 'February'
        break
      case 2:
        month = 'March'
        break
      case 3:
        month = 'April'
        break
      case 4:
        month = 'May'
        break
      case 5:
        month = 'June'
        break
      case 6:
        month = 'July'
        break
      case 7:
        month = 'August'
        break
      case 8:
        month = 'September'
        break
      case 9:
        month = 'October'
        break
      case 10:
        month = 'November'
        break
      case 11:
        month = 'December'
        break
    }

    outDay.innerText = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`
    outHours.innerText = hour < 10 ? '0' + hour : hour
    outMinutes.innerText = minutes < 10 ? '0' + minutes : minutes
    outSeconds.innerText = seconds < 10 ? '0' + seconds : seconds
  }, 1000)
}

function changeBackground() {
  let bodyBackground = document.getElementById('body')
  bodyBackground.style.backgroundImage = `url(./img/bg-${inTimezone.value}.jpg)`
}

update()

inTimezone.addEventListener('change', changeBackground)

console.log('Client side javascript is loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent ='Loading...'
    messageTwo.textContent =''

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = JSON.stringify(data.error)
            }
            else {
                messageOne.textContent = JSON.stringify(data.location)
                messageTwo.textContent = JSON.stringify(data.forecast)
                
            }
        })
    })

})
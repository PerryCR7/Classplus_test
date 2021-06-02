console.log('Client side javascript file is loaded!')
fetch('http://puzzle.mead.io/puzzle').then((response) =>{
    response.json().then((data) =>{
        console.log(data)
    })
})
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

document.getElementById('form').addEventListener('submit', function(evt){
    evt.preventDefault();
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    search = document.getElementById('location').value
    console.log(search)
    fetch('http://localhost:3000/weather?address=' + search).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                    messageOne.textContent = data.error
                    messageTwo.textContent = data.location
                
                // console.log(data.error)
                // console.log(data.location)
                // console.log(data.latitude)
                // console.log(data.longitude)
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                // console.log(data.location)
                // console.log(data.forecast)
            }
            // console.log(data)
        })
    })
  
})
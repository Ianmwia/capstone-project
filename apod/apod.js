const apodApi = 'https://api.nasa.gov/planetary/apod?api_key=0S84atCP9gGZX0g6aosvx6M0tz8ocCyO4BWIy7ZP'

fetch(apodApi)
.then(response => response.json())
.then(data =>{
    console.log('apod api is working')
    console.log(data)
})
.catch(error =>{
    console.error('error api not working', error)
})

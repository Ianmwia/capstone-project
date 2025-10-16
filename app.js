//nasa apod
const url2 = 'https://api.nasa.gov/planetary/apod?api_key=0S84atCP9gGZX0g6aosvx6M0tz8ocCyO4BWIy7ZP'

fetch(url2)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error =>{
    console.error('Nasa Apod Error', error)
})

//spacex api -- free
url = 'https://api.spacexdata.com/v5/launches/latest'

fetch(url)
.then(response => response.json())
.then(data => {
    console.log('spaceX api is working')
    console.log(data)
})
.catch(error =>{
    console.error('spaceX api is not working', error)
})

//nasa mars over photos
const url3 = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0S84atCP9gGZX0g6aosvx6M0tz8ocCyO4BWIy7ZP'

fetch(url3)
.then(response => response.json())
.then(data => {
     console.log('nasa mars rover photos api is working')
     console.log(data) 
})
.catch(error =>{
    console.error('nasa mars rover photos api is NOT working', error)
})

//where is the iss -- free
const url5 = 'https://api.wheretheiss.at/v1/satellites/25544'

fetch(url5)
.then(response => response.json())
.then(data => {
    console.log('iss api is working')
    console.log(data)
})
.catch(error =>{
    console.error('iss api not working', error)
})

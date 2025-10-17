//where is the iss -- free
const issApi = 'https://api.wheretheiss.at/v1/satellites/25544'

fetch(issApi)
.then(response => response.json())
.then(data => {
    console.log('iss api is working')
    console.log(data)
    displayIssData(data)
})
.catch(error =>{
    console.error('iss api not working', error)
})

//dom
const issLocation = document.getElementById('location')
const issAltitude = document.getElementById('altitude')
const issSpeed = document.getElementById('iss-speed')

//function to append
function appendParagraph(containerId, text){
    const p = document.createElement('p')
    p.textContent = text
    containerId.appendChild(p)
}

//display data
function displayIssData(data){
    appendParagraph(issLocation,`Latitude:${data.latitude}`)
    appendParagraph(issLocation,`Longitude:${data.longitude}`)
    appendParagraph(issAltitude,`Altitude:${data.altitude} km`)
    appendParagraph(issSpeed,`Orbital Speed:${data.velocity} km/h`)
}
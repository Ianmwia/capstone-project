//where is the iss -- free
const issApi = 'https://api.wheretheiss.at/v1/satellites/25544'

function fetchDataInIntervals(){
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
}
fetchDataInIntervals()
setInterval(fetchDataInIntervals, 3600000)

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
    //clear appending data after set interval
    issLocation.innerHTML = ''
    issAltitude.innerHTML = ''
    issSpeed.innerHTML = ''

    appendParagraph(issLocation,`Latitude:${data.latitude.toFixed(3)}\u00B0`)
    appendParagraph(issLocation,`Longitude:${data.longitude.toFixed(3)}\u00B0`)
    appendParagraph(issAltitude,`Altitude:${data.altitude.toFixed(3)} km`)
    appendParagraph(issSpeed,`Orbital Speed:${data.velocity.toFixed(3)} km/h`)
}
//spacex api -- free
/*
spaceXApi = 'https://api.spacexdata.com/v5/launches/latest'

fetch(spaceXApi)
.then(response => response.json())
.then(data => {
    console.log('spaceX api is working')
    console.log(data)
})
.catch(error =>{
    console.error('spaceX api is not working', error)
})
*/
//spacex launches
const spaceXApiUpcoming = 'https://api.spacexdata.com/v5/launches/upcoming'
const spaceXApiPast = 'https://api.spacexdata.com/v5/launches/past'

Promise.all([
fetch(spaceXApiUpcoming).then(response => response.json()),
fetch(spaceXApiPast).then(response => response.json())
])
.then(([upComingData, pastData]) => {
    console.log('spaceX Upcoming launches api is working')
    console.log('spaceX Past launches api is working')
    console.log(upComingData)
    console.log(pastData)

    //append upcoming launches
    upComingData.forEach(launch =>{
        console.log(new Date(launch.date_utc).toISOString())
        const card = launchCard(launch)
        upcomingLaunches.appendChild(card)
    })
    //append past launches
    pastData.slice(0,5).forEach(launch =>{
        const card = launchCard(launch)
        upcomingLaunches.appendChild(card)
    })
})
.catch(error =>{
    console.error('spaceX upcoming launches api is not working', error)
})

//date
function formatDate(utcDate){
    const dateObject = new Date(utcDate)
    return{
        utc: dateObject.toUTCString()
    }
}

//function for launch card details
const launchCard = (launch)=>{
    const{name, date_utc, rocket, launchpad, success, upcoming, crew} = launch
    const {utc} = formatDate(date_utc)

    const card = document.createElement('div')
    card.innerHTML = `
        <h3>${name}</h3>
        <p>Date: ${utc}</p>
        <p>Rocket: ${rocket}</p>
        <p>Launchpad: ${launchpad}</p>
        <p>Status: ${upcoming ? 'upcoming' : success ? 'Success' : 'Failure'}</p>
        <p>Crew: ${crew}</p>
    `
return card
}
const upcomingLaunches = document.getElementById('upcoming')
const pastLaunches = document.getElementById('past')
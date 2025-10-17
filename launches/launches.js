const afterDate = '2025-10-17'
const launches = 

fetch(launches)
.then(response => response.json())
.then(data =>{
    console.log('launch api is working')
    console.log(data)
})
.catch(error =>{
    console.error('error', error)
})
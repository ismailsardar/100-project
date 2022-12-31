const btn = document.getElementById('btn');
const reset = document.getElementById('reset');
const text = document.querySelector('.text');

//event leneser
btn.addEventListener('click', ()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            text.innerHTML = 
            `
            Latitude: ${position.coords.latitude} <br>
            Longitude: ${position.coords.longitude}
            `
        });
    } else {
        text.innerHTML = `Your Berowser GeoLocations is not suport`
    }

    reset.addEventListener('click',()=>{
        text.innerHTML = '';
    });
});
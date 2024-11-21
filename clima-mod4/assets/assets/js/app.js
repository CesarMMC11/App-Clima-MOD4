const api_key = "d91ff4ab01c04d0ca49202953243010 ";

function getClima(latitud, longitud){
    const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${latitud},${longitud}&aqi=no`; 

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const climaContainer = document.getElementById('clima');
            climaContainer.innerHTML= `
                <h2>El clima en ${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
                <h3>Hora: ${data.location.localtime}</h3>
                <h3>Temperatura: ${data.current.temp_c}</h3>
                <h3>Condicion: ${data.current.condition.text}</h3>
                <img src="${data.current.condition.icon}">
            `
        })
        .catch(error =>{
            console.error(error)
        })
}

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            //console.log(latitud, longitud);

            getClima(latitud, longitud);
        })
    }
}

window.onload = getLocation;
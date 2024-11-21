const New_api_key = "ec9cb96da4b446b4ad4212739240511";
const actualizar = document.getElementById('actualizar');

function getClima(){
    const longitud = document.getElementById('longitud').value;
    const latitud = document.getElementById('latitud').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${New_api_key}&q=${latitud},${longitud}&aqi=no`; 

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const climaContainer=document.getElementById('clima');
        console.log(data)
        climaContainer.innerHTML=`
                <h2>El clima en ${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
                <h3>Hora: ${data.location.localtime}</h3>
                <h3>Temperatura: ${data.current.temp_c}</h3>
                <h3>Condicion: ${data.current.condition.text}</h3>
                <img src="${data.current.condition.icon}">
        `
    })
    .catch(error => {
        console.error(error);
    })
}

actualizar.addEventListener('click', getClima);
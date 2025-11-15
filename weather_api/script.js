const url="http://api.weatherstack.com/current";
const apiKey="fed0752c6712ddd018b7919a847fdf5b";
$(document).ready(function (){
    weatherFn('Jharkhand')
});
async function weatherFn(cName) {
    const temp=`${url}?access_key=${apiKey}&query=${cName}`;
    try{
        const res=await fetch(temp);
        const data = await res.json();
        console.log('Weather API Response:', data);
        if(res.ok){
            weatherShowFn(data);

        }
        else{
            alert('city not found')
        }
    }
    catch(error){
        console.error('Error occurred:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
    
}

function weatherShowFn(data)
{
    $('#weather-info').show();
    $('#city-name').text(data.location.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').text(`${data.current.temperature}°C`);
    $('#description').text(data.current.weather_descriptions[0]);
    $('#wind-speed').text(`Wind Speed: ${data.current.wind_speed}m/s`);
    $('#weather-icon').attr('src', data.current.weather_icons[0]);

}

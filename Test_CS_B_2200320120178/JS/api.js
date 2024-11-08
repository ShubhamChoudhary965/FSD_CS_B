const weather = async () => {
    const city = document.getElementById("city").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=96e90262d1a0563740a9a1f7f601a74c&units=metric`)
    const data = await response.json()
    console.log(data)
    document.getElementById('cityname').innerText= data.name
    document.getElementById('min').innerText= data.main.temp_min
    document.getElementById('max').innerText=data.main.temp_max
    document.getElementById('hum').innerText=data.main.humidity
    document.getElementById('wind').innerText=data.wind.speed
}
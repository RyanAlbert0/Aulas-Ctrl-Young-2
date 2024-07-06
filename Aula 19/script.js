const CITY = document.querySelector('#input_city')
const BUTTON = document.querySelector('button')
const RESULT = document.querySelector('#result')


BUTTON.addEventListener('click', get_weather)

async function get_weather(){
    const API_KEY = 'e82252527048047f45c32776acc06ba9'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&units=metric&appid=${API_KEY}`
    try{
        const response = await fetch(API_URL)
        if(!response.ok) {
            throw new Error('Not Founded City')}
    
        else{
        const data = await response.json()
        const temp = data.main.temp
        const temp_max = data.main.temp_max
        const temp_min = data.main.temp_min
        const feels_like = data.main.feels_like
        const humidity = data.main.humidity

        RESULT.textContent = `Temperatura: ${temp}°C, Máxima: ${temp_max}°C, Mínima: ${temp_min}°C, Sensação Térmica: ${feels_like}°C e Umidade: ${humidity}%`
        console.log(data,temp,temp_max,temp_min,feels_like, humidity)
        }}
    catch (error){
        console.log('Código ruim, quebrou absolutamente tudo seu programador de m3rda, não serve nem pra criar site, imagine ser alguém na vida')
    }}

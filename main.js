const container =document.querySelector('.container')
const searchbtn =document.querySelector('.search-box button')
const searchbox =document.querySelector('.search-box input')
const APIKey='83c3282c794b4d9820ff8d7bdadb2a96'
const ApiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q='


async function checkweather(city){
    const response= await fetch(ApiUrl +city+`&appid=${APIKey}`)
    var data= await response.json()
     if(response.status==404){
        document.querySelector('.weather-box').style.display='none'
        document.querySelector('.weather-det').style.display='none'
        document.querySelector('.error').style.display='block'
        
    }else{ 
    document.querySelector('.weather-box .description').innerHTML=data.name
    document.querySelector('.weather-box .temperature ').innerHTML=Math.round(data.main.temp )+'°c'
    document.querySelector('.weather-det .info-humidity span').innerHTML=data.main.humidity+'%'
    document.querySelector('.weather-det .info-wind span').innerHTML=data.wind.speed+"km/h"
    let img=document.querySelector('.weather-box .weather-icon')
   
    if(data.weather[0].main=='Clouds'){
        img.src ='images/clouds.png'
    }else if(data.weather[0].main=='Clear'){
        img.src ='images/clear.png'
    }else if(data.weather[0].main=='Rain'){
        img.src ='images/rain.png'
    }else if(data.weather[0].main=='Drizzle'){
        img.src ='images/drizzle.png'
    }else if(data.weather[0].main=='Mist'){
        img.src ='images/mist.png'
    }
    document.querySelector('.weather-box').style.display='flex'
    document.querySelector('.weather-det').style.display='flex'
    document.querySelector('.error').style.display='none'
}
}
searchbtn.addEventListener('click',() =>{
    
    checkweather(searchbox.value)
})



























/* search.addEventListener('click',() =>{
    const ApiKey='83c3282c794b4d9820ff8d7bdadb2a96';
    const city=document.querySelector('.search-box input').value
    if(city=='')
    return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&
    appid=${ApiKey}`).then(response=>response.json()).then(json =>{
        const description=document.querySelector('.weather-box .description')
        const temperature=document.querySelector('.weather-box .temperature')
        const humidity=document.querySelector('.weather-det .humidity')
        const wind=document.querySelector('.weather-det .wind')
       switch(json.weather[0].main){
        case 'Clear':
        img.src ='images/clear.png'
        break;
        case 'Rain':
        '
        break;
        case 'Clouds':
        img.src ='images/clouds.png'
        break;
        case 'Mist':
        img.src ='images/mist.png'
        break;
        case 'Haze':
        img.src ='images/mist.png'
        break;
        default:
        img.src='images/clouds.png'

       }

    })
}) */
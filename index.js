// function loaded(){
//     let inputData = document.querySelector("#input").value = "Digha";
//     enter();
// }
function enter(){
    let inputData = document.querySelector("#input").value;
    if(inputData == "")
    {
        // alert()
        let a = document.querySelector(".missing_input");
        a.style.display = "flex";
    }else{
        let first_page = document.querySelector(".first_page");
        first_page.style.opacity = "0";
        document.querySelector(".missing_input").style.display = "none";
    }
    let temprature = document.querySelector("#temprature");
    let weatherImage = document.querySelector(".weatherImage");
    let address = document.querySelector("#address");
    let date = document.querySelector("#date");
    let Humidity =document.querySelector("#Humidity");
    let Pressure =document.querySelector("#Pressure");
    let Wind =document.querySelector("#Wind");
    let dew_point =document.querySelector("#dew_point");
    let state =document.querySelector(".state");
    let description =document.querySelector(".description");
    let tempratureBox =document.querySelector("#tempratureBox");
    const URL = `https://api.weatherapi.com/v1/current.json?key=7bce3963eeff4d87872174230252604&q=${inputData}&aqi=no`;
    const weatherData = async ()=>{
        let response = await fetch(URL);
        const data = await response.json();
        temprature.innerHTML = data.current.temp_c;
        console.log(data.current.temp_c);
        console.log(data.current.condition.icon);
        weatherImage.src = data.current.condition.icon;
        console.log(data);
        // console.log(data.current.humidity);
        // console.log(data.location.name + ", " + data.location.region + ", " + data.location.country);
        address.innerHTML = data.location.name + ", " + data.location.region + ", " + data.location.country;
        // console.log(data.location.localtime);
        let time = new Date();
        date.innerHTML = time.getDate() + "-" + parseInt( time.getMonth()+1) + "-" + time.getFullYear();
        Humidity.innerHTML = data.current.humidity + "%";
        Pressure.innerHTML = data.current.pressure_in + "in";
        Wind.innerHTML = data.current.wind_kph + "KM/H";
        dew_point.innerHTML = data.current.dewpoint_f + "f";
        state.innerHTML = data.location.name + ", " + data.location.region + ", " + data.location.country
        description.innerHTML = data.current.condition.text;
        tempratureBox.innerHTML = data.current.temp_f + "f";
        document.querySelector("#input").value = "";
    }
    
    
    weatherData();
}
let flag = 0;
function input_color_change(){
    let input = document.querySelector(".input");
    if(flag == 0){input.style.border = "2px solid red";flag++}
    else if(flag == 1){input.style.border = "2px solid green";flag++}
    else if(flag == 2){input.style.border = "2px solid blue";flag++}
    else if(flag == 3){input.style.border = "2px solid yellow";flag++}
    else if(flag == 4){input.style.border = "2px solid pink";flag++}
    else if(flag == 5){input.style.border = "2px solid orange";flag++}
    else if(flag == 6){input.style.border = "2px solid skyblue";flag++}
    else if(flag == 7){input.style.border = "2px solid teal";flag++}
    else{input.style.border = "2px solid aquamarine";flag = 0}
}
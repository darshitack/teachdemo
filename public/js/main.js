const cityname = document.getElementById("cityname");
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const tamp = document.getElementById("tamp");
const tamp_status = document.getElementById("tamp_status");
const thisday = document.getElementById("thisday");
const thistime = document.getElementById("thistime");


     //here upper event and event.prevent() etale lakhu 6 kem k juno data na aave refesh thai ne aave
const getInfo = async(event)=>{
    event.preventDefault();    

    let cityval = cityname.value;
    console.log(cityval);
    if(cityval == "") 
    {
        cityName.innerText = `enter cityname`;
    }
    else{
        
            try{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=33d090c48f8cd61d3fe2dd54cc4e406e`;
                const respons = await fetch(url);
                const data = await respons.json();
                const arrdata = [data];

                cityName.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
                tamp.innerText = (arrdata[0].main.temp-32)*(5/9);
                tamp_status.innerText = arrdata[0].weather[0].main;
                
                const tampmode = arrdata[0].weather[0].main;

                if(tampmode == "Clear")
                {
                    tamp_status.innerHTML = "<i class='fas fa-sun'></i>";
                }
                else if(tampmode == "Clouds")
                {
                    tamp_status.innerHTML = "<i class='fas fa-cloud'></i>";
                }
                if(tampmode == "Rain")
                {
                    tamp_status.innerHTML ="<i class='fas fa-cloud-rain'></i>";
                }  
                else
                {
                    tamp_status.innerHTML = "<i class='fas fa-cloud'></i>"; 
                }
            }

            catch{
                cityName.innerText = `please enter cityname proparly`
            }
    }


        let date = new Date();
        let minitus = date.getMinutes();
        let hour = date.getHours();
        let day = date.getDay();
        let tarikh = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thurday","Fridy","Saturday"];
        let monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let period = "AM";
        if(hour>=12)
        {
            period = "PM";
            hour -=12;
        }
        if(minitus < 10)
        {
            minitus = "0" + minitus;
        }

        thisday.innerHTML = tarikh + " " + daylist[day] + " " + monthlist[month] + " " + year;
        thistime.innerHTML = hour + ":" + minitus + ":" +period;
}  

submitBtn.addEventListener('click',getInfo);
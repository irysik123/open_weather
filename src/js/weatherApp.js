import { getCurrentWeather } from "./open_weatherAPI";
import weatherCardTemplate from "../templates/weather-card.hbs"
import refs from "./refs";

refs.weatherForm.addEventListener("submit", onSearchSubmit);

function convertSecToHoursMin(seconds) {
    const date = new Date(seconds * 1000)
    return `${new String(date.getHours()).padStart(2,0)}:${new String(date.getMinutes()).padStart(2,0)}`
}

async function onSearchSubmit(event) {
    event.preventDefault()

    const searchQuery = event.currentTarget.elements.user_country.value.trim()

    if(!searchQuery) {
        return alert("Please entry city")
    } 

    try {
        const response = await getCurrentWeather(searchQuery)
        
        response.sys.sunset = convertSecToHoursMin(response.sys.sunset)
        response.sys.sunrise = convertSecToHoursMin(response.sys.sunrise)

        refs.weatherWrapper.innerHTML = weatherCardTemplate(response)
    } catch(error) {
        console.log(error)
    }


}

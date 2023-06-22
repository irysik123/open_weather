// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import axios from "axios";

const API_KEY = '95632b02f9162f375a368971925f5209';
const BASE_URL = `https://api.openweathermap.org/data/2.5`



export async function getCurrentWeather(query) {
    try {
      const response = await axios.get(`${BASE_URL}/weather`,{
        params: {
          units: "metric",
          q: query,
          appid: API_KEY,
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


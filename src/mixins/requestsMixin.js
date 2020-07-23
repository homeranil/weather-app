const axios = require("axios");
const APIURL = "https://api.opencagedata.com/geocode/v1/json?key=5c1ddb3aa3544d92b80e0d6081cf6159";

const URLBASE = "https://api.openweathermap.org/data/2.5";
const APIKEY = "f9413feff1c74ad92a26cecd4453d52d";

export const requestsMixin = {
  methods: {
    getCity(lat, lng) {
      return axios.get(`${APIURL}&q=${lat}+${lng}&pretty=1&language=en`);
    },
    getWeather(query, units = 'metric') {
      return axios.get(`${URLBASE}/weather?q=${query}&units=${units}&APPID=${APIKEY}`)
    }
  },
};
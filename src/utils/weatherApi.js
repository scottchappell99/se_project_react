import { parseRequest } from "./api";

export const getWeather = ({ latitude, longitude }, APIKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  ).then((res) => {
    return parseRequest(res);
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.temp = {};
  result.city = data.name;
  result.temp.F = Math.round(data.main.temp);
  result.temp.C = Math.round((data.main.temp - 32) * (5 / 9));
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now() / 1000);
  setConditionName(result);

  return result;
};

const isDay = ({ sunrise, sunset }, timeNow) => {
  return sunrise < timeNow && timeNow < sunset;
};

const getWeatherType = (temp) => {
  if (temp >= 65) {
    return "hot";
  } else if (temp >= 40) {
    return "warm";
  } else {
    return "cold";
  }
};

const setConditionName = (data) => {
  if (data.condition === "clear") {
    data.condition = "clear";
  } else if (data.condition === ("rain" || "snow" || "thunderstorm")) {
    data.condition = data.condition + "y";
  } else if (data.condition === "fog") {
    data.condition = "foggy";
  } else if (data.condition === "clouds") {
    data.condition = "cloudy";
  }
};

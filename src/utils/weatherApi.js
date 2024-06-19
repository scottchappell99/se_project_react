export const getWeather = ({ latitude, longitude }, APIKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  ).then((res) => {
    return parseRequest(res);
  });
};

const parseRequest = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = data.main.temp;
  result.type = getWeatherType(result.temp);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now() / 1000);
  return result;
};

const isDay = ({ sunrise, sunset }, timeNow) => {
  return sunrise < timeNow && timeNow < sunset;
};

const getWeatherType = (temp) => {
  if (temp >= 70) {
    return "hot";
  } else if (temp >= 45) {
    return "warm";
  } else {
    return "cold";
  }
};

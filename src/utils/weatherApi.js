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
  return result;
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

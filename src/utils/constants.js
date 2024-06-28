export const coordinates = {
  latitude: 40.604179,
  longitude: -73.952107,
};

export const APIkey = "ae7ee732c73cec48efb07f0c1f5523ce";

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/weather-images/day/sunny-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/weather-images/day/cloudy-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/weather-images/day/fog-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/weather-images/day/rain-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/weather-images/day/snow-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/weather-images/day/storm-day.png", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL(
      "../assets/weather-images/night/sunny-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL(
      "../assets/weather-images/night/cloudy-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL(
      "../assets/weather-images/night/fog-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL(
      "../assets/weather-images/night/rain-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL(
      "../assets/weather-images/night/snow-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL(
      "../assets/weather-images/night/storm-night.png",
      import.meta.url
    ).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL(
      "../assets/weather-images/day/default-day.png",
      import.meta.url
    ).href,
  },
  night: {
    url: new URL(
      "../assets/weather-images/night/default-night.png",
      import.meta.url
    ).href,
  },
};

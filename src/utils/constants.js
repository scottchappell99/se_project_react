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
    condition: "cloudy",
    url: new URL("../assets/weather-images/day/cloudy-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "foggy",
    url: new URL("../assets/weather-images/day/fog-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "rainy",
    url: new URL("../assets/weather-images/day/rain-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "snowy",
    url: new URL("../assets/weather-images/day/snow-day.png", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "thunderstormy",
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
    condition: "cloudy",
    url: new URL(
      "../assets/weather-images/night/cloudy-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL(
      "../assets/weather-images/night/fog-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL(
      "../assets/weather-images/night/rain-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "snowy",
    url: new URL(
      "../assets/weather-images/night/snow-night.png",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "thunderstormy",
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

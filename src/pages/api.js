import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}",
  params: {
    units: "metric",
    lang: "kr",
    appid: "1df12d8b8cce76ac30cd4289661c30bd",
  },
});

export const getWeather = () => {
  const lat = 35.158043711149562; // => 위도 적어주면 됨
  const lon = 129.05986219337697; // => 경도
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((reposon) => reposon.data);
};

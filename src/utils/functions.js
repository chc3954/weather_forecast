/**
 * Gets a icon image through url
 * @param {string} iconCode
 * @returns param for Icon url
 */
const getWeatherIcon = (iconCode) =>
  `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

export default getWeatherIcon;

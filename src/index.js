import './styles/main.css';

const searchBar = document.querySelector('#search-bar');
const tempScale = document.querySelector('#temp-scale');
const currentCity = document.querySelector('.city');
const currentIcon = document.querySelector('current-icon');
const currentTemp = document.querySelector('current-temp');
const funStuff = [
	'https://api.weatherapi.com/v1/current.json?k',
	'ey=',
	'043282325c',
	'3b44ec9141',
	'0010230511',
	'&q=',
].join('');

async function getWeatherData() {
	const targetCity = searchBar.value;
	const response = await fetch(funStuff + targetCity, { mode: 'cors' });
	const weatherData = await response.json();
	return weatherData;
}

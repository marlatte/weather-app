import './styles/main.css';

const searchForm = document.querySelector('form.search-item');
const tempScale = document.querySelector('#temp-scale');

let currentData;

const funStuff = [
	'https://api.weatherapi.com/v1/forecast.json?k',
	'ey=',
	'043282325c',
	'3b44ec9141',
	'0010230511',
	'&days=3',
	'&q=',
].join('');

async function getWeatherData(targetCity) {
	try {
		const response = await fetch(funStuff + targetCity, { mode: 'cors' });
		const weatherData = await response.json();
		return weatherData;
	} catch (err) {
		console.log(err);
		return err;
	}
}

function formatDate(forecastDay) {
	const daysOfTheWeek = {
		mon: 'Monday',
		tue: 'Tuesday',
		wed: 'Wednesday',
		thu: 'Thursday',
		fri: 'Friday',
		sat: 'Saturday',
		sun: 'Sunday',
	};

	const shortDay = new Date(forecastDay).toUTCString().toLowerCase().slice(0, 3);
	return daysOfTheWeek[shortDay];
}

function updateDisplay() {
	const currentCity = document.querySelector('.city');
	const currentIcon = document.querySelector('.current-icon');
	const currentTemp = document.querySelector('.current-temp');
	const dayOneTitle = document.querySelector('.day-1 .title');
	const dayTwoTitle = document.querySelector('.day-2 .title');

	const { location, current, forecast } = currentData;

	currentCity.textContent = location.name;
	currentTemp.textContent = tempScale.checked
		? `${current.temp_f}° F`
		: `${current.temp_c}° C`;
	currentIcon.src = `https:${current.condition.icon}`;
	currentIcon.alt = `${current.condition.text} weather icon`;

	dayOneTitle.textContent = formatDate(forecast.forecastday[1].date);
	dayTwoTitle.textContent = formatDate(forecast.forecastday[2].date);
}

async function changeCity(targetCity) {
	currentData = await getWeatherData(targetCity);
	console.log(currentData);
	updateDisplay();
	// Remove loading icon
}

function handleSearch(e) {
	e.preventDefault();
	const searchBar = document.querySelector('#search-bar');

	// Show loading icon
	changeCity(searchBar.value);

	searchBar.value = '';
	searchBar.blur();
}

searchForm.addEventListener('submit', handleSearch);
tempScale.addEventListener('click', updateDisplay);

changeCity('new york');

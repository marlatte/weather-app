import './styles/main.css';

const searchForm = document.querySelector('form.search-item');
const tempScale = document.querySelector('#temp-scale');
const dialog = document.querySelector('dialog');

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

function makeTitleCase(string) {
	return string
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

function setCurrentInfo() {
	const currentCity = document.querySelector('.city');
	const currentCountry = document.querySelector('.country');
	const currentIcon = document.querySelector('.current-icon');
	const currentTemp = document.querySelector('.current-temp');

	const { location, current } = currentData;

	currentCity.textContent = location.name;
	currentCountry.textContent = location.country;
	currentTemp.textContent = tempScale.checked
		? `${current.temp_f}° F`
		: `${current.temp_c}° C`;
	currentIcon.src = `https:${current.condition.icon}`;
	currentIcon.alt = `${current.condition.text} weather icon`;
}

function setForecastInfo() {
	[0, 1, 2].forEach((dayNum) => {
		const forecast = currentData.forecast.forecastday[dayNum];
		const title = document.querySelector(`.day-${dayNum} .title`);
		const icon = document.querySelector(`.day-${dayNum} .icon`);
		const low = document.querySelector(`.day-${dayNum} .daily.low .num`);
		const high = document.querySelector(`.day-${dayNum} .daily.high .num`);

		title.textContent = !dayNum ? 'Today' : formatDate(forecast.date);

		icon.src = `https:${forecast.day.condition.icon}`;

		low.textContent = tempScale.checked
			? `${forecast.day.mintemp_f}° F`
			: `${forecast.day.mintemp_c}° C`;

		high.textContent = tempScale.checked
			? `${forecast.day.maxtemp_f}° F`
			: `${forecast.day.maxtemp_c}° C`;
	});
}

function updateDisplay() {
	setCurrentInfo();
	setForecastInfo();
	dialog.close();
}

async function changeCity(targetCity) {
	currentData = await getWeatherData(targetCity);
	console.log(currentData);
	updateDisplay();
}

function handleSearch(e) {
	e.preventDefault();
	const searchBar = document.querySelector('#search-bar');
	const searchLoad = document.getElementById('load-search');

	searchLoad.textContent = makeTitleCase(searchBar.value);
	dialog.showModal();
	dialog.blur();

	changeCity(searchBar.value);

	searchBar.value = '';
	searchBar.blur();
}

searchForm.addEventListener('submit', handleSearch);
tempScale.addEventListener('click', updateDisplay);

changeCity('new york');

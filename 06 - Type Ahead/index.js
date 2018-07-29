const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

//fetch our data and hold it in a variable
const cities = [];
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getCities(cityOrState, cities) {
  const regex = new RegExp(cityOrState, "gi");

  return cities.filter(place => {
    return place.city.match(regex) || place.state.match(regex);
  });
}

function matchInput() {
  const inputValue = this.value;
  const matches = getCities(inputValue, cities);

  const html = matches
    .map(place => {
      const regex = new RegExp(inputValue, "gi");
      let cityName = place.city.replace(
        regex,
        `<span class="hl">${inputValue}</span>`
      );
      let stateName = place.state.replace(
        regex,
        `<span class="hl">${inputValue}</span>`
      );
      return `<li>
        <span class="name">${cityName}, ${stateName}</span> 
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>`;
    })
    .join("");

  suggestions.innerHTML = html;
}

let searchInput = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");
searchInput.addEventListener("keyup", matchInput);

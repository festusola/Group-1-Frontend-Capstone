const searchForm = document.querySelector("#planet-search-form");
const searchInput = document.querySelector("#planet-search");
const searchResults = document.querySelector("#search-results");
const planetCard = document.querySelector("#earth-card");
const searchHint = document.querySelector("#hint")

const planetImage = document.querySelector("#planet-image");
const planetName = document.querySelector("#planet");
const planetType = document.querySelector(".planet-type");
const planetDescription = document.querySelector("#planet-description");

const searchButton = searchForm.querySelector("button[type='submit']");
const themeButton = document.querySelector(".theme-toggle");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = searchInput.value.trim().toLowerCase();

  if (!name) return;

  searchButton.disabled = false;
  searchHint.textContent = "";

  try {
    const response = await fetch("./test.json");

    if (!response.ok) {
      throw new Error("Could not load test.json");
    }

    const planets = await response.json();

    const planet = planets.find(
      (item) => item.name.toLowerCase() === name
    );

    if (!planet) {
      searchResults.hidden = false;
      planetCard.hidden = true;
      searchHint.textContent = "No results";
      return;
    }

    searchResults.hidden = true;
    searchHint.textContent="";

    planetName.textContent = planet.name;
    planetType.textContent = planet.type;
    planetDescription.textContent = planet.description;

    planetImage.src = planet.image;
    planetImage.alt = planet.name;

    document.querySelector("#planet-gravity").textContent = planet.gravity;
    document.querySelector("#planet-mass").textContent = planet.mass;
    document.querySelector("#planet-period").textContent = planet.period;
    document.querySelector("#planet-temperature").textContent = planet.temperature;
    document.querySelector("#planet-moons").textContent = planet.moons;
    document.querySelector("#planet-diameter").textContent = planet.diameter;
    document.querySelector("#planet-distance").textContent = planet.distanceFromSun;

    searchResults.hidden = true;
    planetCard.hidden = false;

  } catch (error) {
    console.error(error);
  } finally {
    searchButton.disabled = false;
  }
});


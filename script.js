const searchForm = document.querySelector("#planet-search-form");
const searchInput = document.querySelector("#planet-search");
const searchStatus = document.querySelector("#search-status");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!searchInput.value.trim()) {
    searchInput.focus();
    return;
  }

  searchStatus.hidden = false;
  searchResult.hidden = false;
});

searchInput.addEventListener("input", () => {
  searchStatus.hidden = true;
  searchResult.hidden = true;
});

// searchbar toggle
const validKeyCode = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63
  , 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84
  , 85, 86, 87, 88, 89, 90, 106, 107, 108, 109, 110, 111, 186, 187, 188, 189, 190, 191
  , 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208
  , 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222];

const searchBarToggle = document.querySelector(".search-bar-toggle");
const searchBar = document.querySelector(".search-bar");
const visibleHomeButton = document.querySelector(".visible-home-button");


searchBarToggle.addEventListener("click", function () {
  if (searchBar.classList.contains("open")) {
    if (encodeURIComponent(searchBar.querySelector('input').value).length > 1) {
      const userInputValue = encodeURIComponent(searchBar.querySelector('input').value);
      window.location.href = `search_result_heaven_blog.html?keyword=${userInputValue}`
    }
    else {
      searchBar.classList.remove("open");
      menuBar.classList.remove("replaced");
      visibleHomeButton.classList.remove("replaced");
    }
  }
  else {
    searchBar.classList.add("open");
    menuBar.classList.add("replaced");
    visibleHomeButton.classList.add("replaced");
    searchBar.querySelector('input').focus()
  }
});
searchBar.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    searchBar.classList.remove("open");
    menuBar.classList.remove("replaced");
    visibleHomeButton.classList.remove("replaced");
  }
  else if (e.keyCode === 13) {
    const userInputValue = encodeURIComponent(searchBar.querySelector('input').value);
    window.location.href = `search_result_heaven_blog.html?keyword=${userInputValue}`
  }
});

const valueRemained = new URLSearchParams(location.search).get('keyword');
let searchResult = document.querySelector('.search-result h1');
let searchAnother = document.querySelector('.search-for-another input')
searchResult.textContent = valueRemained;
searchAnother.value = valueRemained;



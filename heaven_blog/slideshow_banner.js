// slideshow
const switchTime = 4000;
const totalNumPost = 4;
const slideShow = document.querySelector(".slideshow-container");
const currentPost = slideShow.className.split(" ")[1];
let numPost = parseInt(currentPost.match(/\d+/)[0]);

setInterval(function () {
  slideShow.classList.remove(`post${numPost}`);
  if (numPost < totalNumPost) {
    numPost += 1;
  } else {
    numPost = 1;
  }
  slideShow.classList.add(`post${numPost}`);
}, switchTime);

// slideshow controller
const backButton = document.querySelector('#back-button');
const forwardButton = document.querySelector('#forward-button');
backButton.addEventListener('click', function() {
    slideShow.classList.remove(`post${numPost}`);
    if ((numPost <= totalNumPost) && (numPost>1)) {
        numPost -= 1;
    } else {
        numPost = totalNumPost;
    }
    slideShow.classList.add(`post${numPost}`);
});
forwardButton.addEventListener('click', function() {
    slideShow.classList.remove(`post${numPost}`);
    if (numPost < totalNumPost) {
        numPost += 1;
    } else {
        numPost = 1;
    }
    slideShow.classList.add(`post${numPost}`);
});
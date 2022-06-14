// menuBarToggle = document.querySelector('.menu-toggle');
// floatSidebar = document.querySelector('.float-sidebar');
// covering = document.querySelector('.covering');
// var delayInMilliseconds = 100;

// menuBarToggle.addEventListener('click', function() {
//     floatSidebar.classList.add('display');
//     covering.classList.add('display');
//     setTimeout(function() {
//         covering.classList.add('animation-start');
//       }, delayInMilliseconds);
      
// });

const toggle = document.querySelector('#nav-icon3');
toggle.addEventListener('click', function() {
    toggle.classList.add('open');
});
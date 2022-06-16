menuBarToggle = document.querySelector('.menu-toggle');
floatSidebar = document.querySelector('.float-sidebar');
floatSidebarDetail = document.querySelector('.float-sidebar-wrapper')
covering = document.querySelector('.covering');
var delayInMilliseconds = 100;

menuBarToggle.addEventListener('click', function() {
        floatSidebar.classList.add('display');
        covering.classList.add('display');
        setTimeout(function() {
            covering.classList.add('animation-start');
        }, delayInMilliseconds);
});
const toggle = document.querySelector('#nav-icon3');
toggle.addEventListener('click', function() {
    toggle.classList.add('open');
});

document.addEventListener('click', function(event) {
    console.log(event.target)
    console.log(menuBarToggle.classList.contains(event.target))
    if (floatSidebar.classList.contains('display')) {
            if (menuBarToggle.classList.contains(event.target) || event.target === covering) {
                console.log('yes-2')
                floatSidebar.classList.remove('display');
                covering.classList.remove('display');
                setTimeout(function() {
                    covering.classList.remove('animation-start');
                }, delayInMilliseconds);
            }
        }
    })
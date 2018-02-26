
$(document).ready(function () {
    $(window).load(function() {

        $("#flexiselDemo3").flexisel({
                        visibleItems: 5, 
                        animationSpeed: 100, 
                    infinite: true,
       navigationTargetSelector: null,
                    // Auto scrolling
        autoPlay: {
            enable: false,
            interval: 500,
            pauseOnHover: true
        },
                    // Custom breakpoints for responsive design
        responsiveBreakpoints: { 
            portrait: { 
                    changePoint:480,
                    visibleItems: 1,
                    itemsToScroll: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3,
                itemsToScroll: 3
            }
        },

        // callbacks
        loaded: function(){ },
        before: function(){ },
        after: function(){ },
        resize: function(){ }

    });  

});

/*single carusel*/
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");



next.addEventListener("click", function () {
    var active = document.querySelector(".slider ul .active");
    active.classList.remove("active");

    var activeDot = document.querySelector(".slider .dots .active");
    // activeDot.classList.remove("active");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active");
        // activeDot.nextElementSibling.classList.add("active");
    } else {
        document.querySelector(".slider ul").children[0].classList.add("active");
        // document.querySelector(".slider .dots").children[0].classList.add("active");
    }
});

prev.addEventListener("click", function () {
    var active = document.querySelector(".slider ul .active");
    active.classList.remove("active");

    var activeDot = document.querySelector(".slider .dots .active");
    // activeDot.classList.remove("active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
        // activeDot.previousElementSibling.classList.add("active");
    } else {
        // var ul = document.querySelector(".slider ul");
        // ul.children[ul.childElementCount - 1].classList.add("active");

        var last = document.querySelector(".slider ul li:last-child");
        last.classList.add("active");

        var lastDot = document.querySelector(".slider .dots span:last-child");
        lastDot.classList.add("active");
    }
});



});

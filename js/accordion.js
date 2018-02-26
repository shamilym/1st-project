

var Accordion = function (selector, allOpen = false) {
    var main = document.querySelector(selector);

    if (!main.classList.contains("accord")) {
        main.classList.add("accord");
    }

    var items = document.querySelectorAll(selector + " .title");
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function () {
            if (!allOpen) {
                var activeElement = document.querySelector(selector + " .active");
                if (activeElement != null && activeElement != this.parentNode) {
                    activeElement.classList.remove("active");
                }
            }
            this.parentNode.classList.toggle("active");
        });
    }

}
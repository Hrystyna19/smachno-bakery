document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-hide"),
        menuItem1 = document.querySelector(".menu-hide__item1"),
        menuItem2 = document.querySelector(".menu-hide__item2"),
        headerContentBlock = document.querySelector(".menu-hide__content"),
        headerContentItem = document.querySelectorAll(".menu-hide__content a");

    function showMenu() {
        menuItem1.classList.add("active");
        menuItem2.classList.add("active");
        headerContentBlock.classList.add("active");
    }

    function hideMenu() {
        menuItem1.classList.remove("active");
        menuItem2.classList.remove("active");
        headerContentBlock.classList.remove("active");
    }

    menu.addEventListener("click", function () {
        if (!menuItem1.classList.contains("active")) {
            showMenu();
        } else {
            hideMenu();
        }
    });

    headerContentItem.forEach(el => {
        el.addEventListener("click", function () {
            hideMenu();
        });
    });
});

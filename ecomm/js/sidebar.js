const nav = document.querySelector("#sidebar-filters");
const navToggle = document.querySelector(".sidebar-filters-toggle");

navToggle.addEventListener("click", () => {

    const navVisibility = nav.getAttribute("data-visible");

    if(navVisibility === "true") {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = `<i class="fa-solid fa-filter"></i>
        <span class="txt-uppercase">Filters</span>`
    }
    else {
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.innerHTML = `<i class="fa-solid fa-times"></i>
        <span class="txt-uppercase">Close</span>`
    }

})
const headerEl = document.querySelector(".header");
const openNavEl = document.querySelector(".nav-open");
const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Smooth Scrolling animation

const alLinks = document.querySelectorAll("a:link");
alLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll Back to the top:
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Going to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Closing mobile nav

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  })
);

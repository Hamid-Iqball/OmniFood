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
      headerEl.classList.toggle("nav-open");
    }
  })
);

// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.querySelector("body").classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Stickynavigation

const headEl = document.querySelector(".header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    // if (ent.isIntersecting === true) {
    //   document.body.classList.remove("sticky");
    // }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "80px",
  }
);
obs.observe(headEl);

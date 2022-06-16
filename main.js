const btnMenu = document.querySelector(".header-btn");
const nav = document.querySelector(".nav");
const navigation = document.querySelector(".navigation");
const headerLogo = document.querySelector(".header-logo");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const fadeUpIn = document.querySelectorAll(".fade-up-in");
const fadeLeftIn = document.querySelectorAll(".fade-left-in");
const fadeRightIn = document.querySelectorAll(".fade-right-in");
const fade = document.querySelectorAll(".fade");

btnMenu.addEventListener("click", menuToggle);
window.addEventListener("load", effectSample);

function menuToggle(e) {
  e.preventDefault();
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
  headerLogo.classList.toggle("active");
}
function showImg(index) {
  document.getElementById("show").src = index;
}

var lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      header.style.transition = "transform 0.4s ease";
      header.style.transform = "translateY(" + -100 + "% )";
    } else {
      header.style.transition = "transform 0.4s ease";
      header.style.transform = "translateY(" + 0 + "% )";
    }
    lastScrollTop = st;
    //lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

function effectSample() {
  body.classList.add("loaded");
}
/**LazyLoad Images & Text **/

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");

        img.setAttribute("src", src);
        img.classList.add("active");
        entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
      }
    });
  });
  io.observe(target);
};
fadeLeftIn.forEach(lazyLoad);
fadeRightIn.forEach(lazyLoad);
fadeUpIn.forEach(lazyLoad);
fade.forEach(lazyLoad);


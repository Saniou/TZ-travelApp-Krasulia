const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    dot.classList.add('active');
  });
});

const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardMarginRight = parseFloat(getComputedStyle(card).marginRight);

const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -((cardCount / 3) * (carouselWidth + cardMarginRight) - carouselWidth);

function updateCarousel() {
  carousel.style.transform = `translateX(${offset}px)`;
}

leftButton.addEventListener("click", function () {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    updateCarousel();
  }
});

rightButton.addEventListener("click", function () {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    updateCarousel();
  }
});

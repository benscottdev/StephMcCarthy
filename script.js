const swiper = new Swiper(".in-the-press-swiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
const booksSwiper = new Swiper(".books-swiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
});

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".full-screen-menu");

mobileMenu.style.display = "none";

const toggleNav = () => {
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
    const tl = gsap.timeline();
    tl.to(mobileMenu, {
      autoAlpha: 0,
      duration: 0.5,
    }),
      tl.to(
        mobileMenu,
        {
          display: "none",
        },
        "-=0.5"
      );
  } else {
    mobileMenu.classList.add("open");
    const tl = gsap.timeline();
    tl.to(mobileMenu, {
      display: "flex",
    }),
      tl.to(
        mobileMenu,
        {
          autoAlpha: 1,
          duration: 0.5,
        },
        "-=0.5"
      );
  }
};

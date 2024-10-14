var swiper = new Swiper(".mySwiper-references", {
    slidesPerView: 6.3,
    spaceBetween: 70,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop:true
  });
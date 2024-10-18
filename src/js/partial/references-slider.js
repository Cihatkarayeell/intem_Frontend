/*
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
 */
  const app = {};
  app.ourClientsSection = { 
      swiper: null,
      setSwiper: function (slider) {
          const prevBtn = slider.querySelector(".btn-navigation.prev");
          const nextBtn = slider.querySelector(".btn-navigation.next");
  
          app.ourClientsSection.swiper = new Swiper(slider.querySelector(".mySwiper-references"), {
              speed: 500,
              autoplay: {
                  delay: 0, // 3 saniye gecikme
                  disableOnInteraction: false,
                  reverseDirection: false,
              },
              lazy: true,
              loop: true,
              direction: 'horizontal',
              breakpoints: {
                  0: {
                      slidesPerView: 'auto',
                      slidesPerGroup: 1,
                      spaceBetween: 10,
                  },
                  480: {
                      slidesPerView: 6,
                      slidesPerGroup: 1,
                      spaceBetween: 24,
                  }
              },
          });
  
          prevBtn.addEventListener("click", function(event) {
              app.ourClientsSection.swiper.slidePrev(); // Bir önceki slayta geç
          });
  
          nextBtn.addEventListener("click", function(event) {
              app.ourClientsSection.swiper.slideNext(); // Bir sonraki slayta geç
          });
      },
      init: function () {
          const clientSection = document.getElementById("our-clients-section");
          if (clientSection) {
              app.ourClientsSection.setSwiper(clientSection);
          }
      }
  };
  
  // Init function should be called to initialize the swiper
  app.ourClientsSection.init();
  
const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};



// PARTIALS
document.querySelector('#searchButton').addEventListener('click', function() {
    this.querySelector('.search-box').classList.toggle('active');
});
 
console.log('%cMade by passion', 'background:#da4648;color:#fff;padding:10px;font-weight:bold;')


// UTILS
function fadeOut(element, soft = false, callback = null) {
	if(!element) {
		return false;
	}

	element.style.opacity = 1;

	(function fade() {
		if((element.style.opacity -= 0.1) < 0) {
			if(soft) {
				element.style.display = "none";
			} else {
				element.remove();
			}

			if(callback instanceof Function) {
				callback();
			} else if(window[callback] instanceof Function) {
				window[callback]();
			}
		} else {
			requestAnimationFrame(fade);
		}
	})();

}

function smoothScroll(element) {
	if(element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function smoothScrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

document.addEventListener('click', event => {
	if(event.target.tagName !== 'A') {
		return false;
	}
	const anchor = event.target;
	const anchor_href = anchor.getAttribute('href');

	if(anchor_href === '#') {
		event.preventDefault();
		smoothScrollToTop();
	}
	else if(anchor_href.charAt(0) === '#' || (anchor_href.charAt(0) === '/' && anchor_href.charAt(1) === '#')) {
		if(!anchor.hash) {
			return false;
		}

		const target = document.querySelector(anchor.hash);
		if(target) {
			event.preventDefault();
			smoothScroll(target);
		}
	}
});

window.onload = () => {
	document.querySelectorAll('img').forEach(image => {
		if(image.complete && typeof image.naturalWidth != 'undefined' && image.naturalWidth <= 0) {
			image.src = BASE_URL + '/img/no-image.jpg';
		}
	});
};


document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('href') && anchor.href.startsWith('tel:')) {
		anchor.href = 'tel:' + anchor.href.replaceAll(/[^\d+]/g, '');
	}
});

	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('target') && anchor.getAttribute('target') === '_blank') {
		anchor.setAttribute('rel', 'noopener noreferrer nofollow');
	}
});

	document.addEventListener('contextmenu', event => {
	if(event.target.nodeName === 'IMG') {
		event.preventDefault();
	}
});

	/*document.querySelectorAll('table').forEach(table => {
	if(!table.parentElement.classList.contains('table-responsive')) {
		table.outerHTML = '<div class="table-responsive">' + table.outerHTML + '</div>';
	}
});
 */
});
 

 
var swiper = new Swiper(".mySwiper-pagination", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

// Modalı açmak için butona tıklama eventi
document.querySelector('#menuOpenToggle').onclick = function() {
    document.querySelector('#sidebar').classList.toggle('active');
    document.querySelector('body').classList.add('after');
};

// Modalı kapatmak için butona tıklama eventi
document.querySelector('#menuCloseToggle').onclick = function() {
    document.querySelector('#sidebar').classList.remove('active');
    document.querySelector('body').classList.remove('after');
};

// Eğer animasyon bittiğinde başka bir aksiyon almak istiyorsanız buraya ekleyebilirsiniz
document.querySelector('.loading-progress').addEventListener('animationend', () => {
    
    const loadingPage = document.getElementById('loadingPage');
    const bodyElement = document.body;

    loadingPage.classList.add('removed');
    bodyElement.classList.remove('overflow');
  });
  
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
  
// DOM tamamen yüklendiğinde çalışması için event listener
document.addEventListener('DOMContentLoaded', function() {
    // GDPR checkbox için click event listener
    const gdprCheckbox = document.getElementById('gdpr');
    if (gdprCheckbox) {
      gdprCheckbox.addEventListener('click', function() {
        if (gdprCheckbox.checked) {
          gdprCheckbox.classList.add('active');
        } else {
          gdprCheckbox.classList.remove('active');
        }
      });
    } else {
      console.error('GDPR checkbox bulunamadı.');
    }
  
    // Privacy checkbox için click event listener
    const privacyCheckbox = document.getElementById('privacy');
    if (privacyCheckbox) {
      privacyCheckbox.addEventListener('click', function() {
        if (privacyCheckbox.checked) {
          privacyCheckbox.classList.add('active');
        } else {
          privacyCheckbox.classList.remove('active');
        }
      });
    } else {
      console.error('Privacy checkbox bulunamadı.');
    }
  });
  
var swiper = new Swiper(".mySwiper-news", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next-news",
      prevEl: ".swiper-button-prev-news",
    },
  });
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = content.classList.contains('show');

        // Tüm açık accordion içeriklerini kapat
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item.classList.contains('show')) {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });

        // Eğer tıklanan item aktif değilse aç
        if (!isActive) {
            content.classList.remove('hide');
            content.classList.add('show');
        }
    });
});

// DOM tamamen yüklendiğinde 10 saniye sonra modali göster
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const modal = document.getElementById('cookieModal');
      modal.classList.add('show');
    }, 10000); // 10 saniye bekle
  });
  
  // Modalı kapatma işlemleri
  const closeModal = document.getElementById('closeModal');
  const cookieModal = document.getElementById('cookieModal');
  
  // Kapatma butonuna tıklanırsa modalı kapat
  closeModal.addEventListener('click', () => {
    cookieModal.classList.remove('show');
  });
  
  // Kabul et veya reddet butonlarına tıklanırsa modalı kapat
  document.querySelector('.accept-btn').addEventListener('click', () => {
    cookieModal.classList.remove('show');
  });
  
  document.querySelector('.reject-btn').addEventListener('click', () => {
    cookieModal.classList.remove('show');
  });
  

// Modal ve butonları seçiyoruz
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Modalı açmak için butona tıklama eventi
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Modalı görünür yap
  modal.classList.add('show');  // Modal içeriğini aşağı indir
});

// Modalı kapatmak için butona tıklama eventi
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none'; // Modalı tamamen gizle
  }, 500); // Animasyon süresi kadar bekleyerek kapanış işlemi
});

// Modalın dışına tıklandığında kapatma
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }
});

// script.js

/**
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("news-detail-block");
    const openModalButton = document.getElementsByClassName("news-detail-open-modal");
    const closeModalButton = modal.getElementById(".close-news-detail");

    openModalButton.addEventListener("click", () => {
        modal.classList.add("show");
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
 * 
 */
// link tüm modalları açıcak fakat eşleşme yaparak gerekli 
// modalı görünür yapıcak ama bu kodlar bu özelliği taşımıyor

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5jb25zdCBQQVRIX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgRlVMTF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuY29uc3QgR0VUX1BBUkFNID0gKGtleSkgPT4ge1xyXG5cdHJldHVybiBuZXcgVVJMKEZVTExfVVJMKS5zZWFyY2hQYXJhbXMuZ2V0KGtleSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFBBUlRJQUxTXHJcbkBAaW5jbHVkZSgncGFydGlhbC9oZWFkZXIuanMnKSBcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3dhdGVybWFyay5qcycpXHJcblxyXG4vLyBVVElMU1xyXG5AQGluY2x1ZGUoJ3V0aWwvZmFkZS1vdXQuanMnKVxyXG5AQGluY2x1ZGUoJ3V0aWwvc21vb3RoLXNjcm9sbC5qcycpXHJcbkBAaW5jbHVkZSgndXRpbC9yZXBsYWNlLWJyb2tlbi1pbWFnZS5qcycpXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cdC8vIFBBUlRJQUxTXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL2Zvcm1hdC10ZWwtbGluay5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL2V4dGVybmFsLWxpbmstbm9yZWZlci5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3Byb3RlY3QtaW1hZ2UuanMnKVxyXG5cdC8qQEBpbmNsdWRlKCdwYXJ0aWFsL3Jlc3BvbnNpdmUtdGFibGUuanMnKSAqL1xyXG59KTtcclxuIFxyXG5cclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2luaXQuanMnKSBcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2hlcm8tc2xpZGVyLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3NpZGViYXItbWVudS5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9sb2FkaW5nLXBhZ2UuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvcmVmZXJlbmNlcy1zbGlkZXIuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvbmV3c2xldHRlci5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9uZXdzLXNsaWRlci5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9zc3MuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvY29va2llLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3ZpZGVvLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL25ld3MtZGV0YWlsLW1vZGFsLmpzJylcclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};



// PARTIALS
document.querySelector('#searchButton').addEventListener('click', function() {
    this.querySelector('.search-box').classList.add('active');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5jb25zdCBQQVRIX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgRlVMTF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuY29uc3QgR0VUX1BBUkFNID0gKGtleSkgPT4ge1xyXG5cdHJldHVybiBuZXcgVVJMKEZVTExfVVJMKS5zZWFyY2hQYXJhbXMuZ2V0KGtleSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFBBUlRJQUxTXHJcbkBAaW5jbHVkZSgncGFydGlhbC9oZWFkZXIuanMnKSBcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3dhdGVybWFyay5qcycpXHJcbiBcclxuLy8gVVRJTFNcclxuQEBpbmNsdWRlKCd1dGlsL2ZhZGUtb3V0LmpzJylcclxuQEBpbmNsdWRlKCd1dGlsL3Ntb290aC1zY3JvbGwuanMnKVxyXG5AQGluY2x1ZGUoJ3V0aWwvcmVwbGFjZS1icm9rZW4taW1hZ2UuanMnKVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHQvLyBQQVJUSUFMU1xyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9mb3JtYXQtdGVsLWxpbmsuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9leHRlcm5hbC1saW5rLW5vcmVmZXIuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9wcm90ZWN0LWltYWdlLmpzJylcclxuXHQvKkBAaW5jbHVkZSgncGFydGlhbC9yZXNwb25zaXZlLXRhYmxlLmpzJykgKi9cclxufSk7XHJcbiBcclxuXHJcbkBAaW5jbHVkZSgncGFydGlhbC9pbml0LmpzJykgXHJcbkBAaW5jbHVkZSgncGFydGlhbC9oZXJvLXNsaWRlci5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9zaWRlYmFyLW1lbnUuanMnKVxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvbG9hZGluZy1wYWdlLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3ZpZGVvLW1vZGFsLmpzJylcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2Nvb2tpZS1tb2RhbC5qcycpXHJcbkBAaW5jbHVkZSgncGFydGlhbC9yZWZlcmVuY2VzLXNsaWRlci5qcycpXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==

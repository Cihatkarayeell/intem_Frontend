// Eğer animasyon bittiğinde başka bir aksiyon almak istiyorsanız buraya ekleyebilirsiniz
document.querySelector('.loading-progress').addEventListener('animationend', () => {
    
    const loadingPage = document.getElementById('loadingPage');
    const bodyElement = document.body;

    loadingPage.classList.add('removed');
    bodyElement.classList.remove('overflow');
  });
  
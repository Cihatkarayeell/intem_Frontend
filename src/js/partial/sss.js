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

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
document.addEventListener("DOMContentLoaded", function() {
    function
    showAlert(message) {
        alert(message);
    }
    const welcomeButton = document.getElementById("welcomeButton");
    if (welcomeButton) {
        welcomeButton.addEventListener("click", function() {
            showAlert("Добро пожаловать на наш сайт!");
        });
    }
    const aboutButton = document.getElementById("aboutButton");
    if (aboutButton) {
        aboutButton.addEventListener("click", function() {
            showAlert("Мы - команда профессионалов, которые любят свое дело.");
        });
    }
    const contactButton = document.getElementById("contactButton");
    if (contactButton) {
        contactButton.addEventListener("click", function() {
            showAlert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
        });
    }
});
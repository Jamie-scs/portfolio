$('.no-script').hide();
$('.script').show();

const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});

$("logo-mobile-container a, nav a").on("click", function() {
    $(".hamburger-menu").removeClass("active");
    $(".off-screen-menu").removeClass("active");
});
// ========================================
// Main JavaScript
// ========================================

// Deactivate All Fallback Elements

$('.no-script').hide();

// Activate Script Elements

$('.script').show();

// Off Screen Menu

const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});

// Hide Menu On Link Click

$("logo-mobile-container a, nav a").on("click", function() {
    $(".hamburger-menu").removeClass("active");
    $(".off-screen-menu").removeClass("active");
});

// Page Transition

$('.animsition').animsition({
	inClass: 'flip-in-y',
	outClass: 'fade-out-up-lg',
	inDuration: 1250,
	outDuration: 750
});
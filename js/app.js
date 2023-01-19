// ========================================
// Main JavaScript
// ========================================

// Deactivate All Fallback Elements

$('.no-script').hide();

// Activate Script Elements

$('.script').show();

// Form Validation

let form = document.getElementById("form"),
	firstName = document.getElementById("name"),
	surname	= document.getElementById("surname"),
	email = document.getElementById("email"),
	subject	= document.getElementById("subject"),
	message	= document.getElementById("message"),
	errorMsg = document.getElementsByClassName("error"),
	successIcon = document.getElementsByClassName("success-icon"),
	failureIcon = document.getElementsByClassName("failure-icon");
	
form.addEventListener('submit', (e) => {
	e.preventDefault();
	hasContent(firstName, 0, "First Name cannot be blank");
	hasContent(surname, 1, "Last Name cannot be blank");
	hasContent(email, 2, "Email cannot be blank");
	hasContent(subject, 3, "Subject cannot be blank");
	hasContent(message, 4, "Message cannot be blank");
});

let hasContent = (id, index, error) => {
	if (id.value.trim() === "")	{
		errorMsg[index].innerHTML = error;
	    id.style.border = "2px solid red";
	    failureIcon[index].style.opacity = "1";
	    successIcon[index].style.opacity = "0";
	    return;
	}
	errorMsg[index].innerHTML = "";
    id.style.border = "2px solid green";
    failureIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
};

// Off Screen Menu

const	hamMenu			= document.querySelector('.hamburger-menu'),
		offScreenMenu	= document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});

// Hide Menu On Link Click

$(".logo-mobile-container a, nav a").on("click", function() {
    $(".hamburger-menu").removeClass("active");
    $(".off-screen-menu").removeClass("active");
});

// Page Transition

$('.animsition').animsition({
	inClass: 'flip-in-y',
	outClass: 'fade-out-up-lg',
	inDuration: 1000,
	outDuration: 750
});

// Typewriter Effect

$(function() {
	$('.name').typewriter({
		sound:true
	});
});

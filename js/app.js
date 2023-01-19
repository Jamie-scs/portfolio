// ========================================
// Main JavaScript
// ========================================

// Deactivate All Fallback Elements

$('.no-script').hide();

// Activate Script Elements

$('.script').show();

// Form Validation

let form		= document.getElementById("form"),
	firstName	= document.getElementById("name"),
	surname		= document.getElementById("surname"),
	email		= document.getElementById("email"),
	subject		= document.getElementById("subject"),
	message		= document.getElementById("message"),
	errorMsg	= document.getElementsByClassName("error"),
	successIcon	= document.getElementsByClassName("success-icon"),
	failureIcon	= document.getElementsByClassName("failure-icon");

const indexMsg	=
	[
 	"First Name",
 	"Last Name",
 	"Email",
 	"Subject",
 	"Message"
]

const errMsg	=
	{
	noContent		: " is required",
	hasInvalid		: " contains invalid characters",
	nameIsShort		: " is too short, min 2 characters",
	subIsShort		: " is too short, min 4 characters",
	msgIsShort		: " is too short, min 20 characters",
	isLong			: " is too long, max 254 characters",
	notEmail		: " given is not a valid email"
}

const regExpAN	= new RegExp(/^[\w ]+$/),
	  regExpTx	= new RegExp(/^[a-zA-Z ]+$/),
	  regExpMsg	= new RegExp(/^[a-zA-Z\s]+$/),
	  regExpEm	= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

let validate	= (id, index) => {
	let val = id.value.trim();
	let fail = () => {
	    id.style.border = "2px solid red";
	    failureIcon[index].style.opacity = "1";
	    successIcon[index].style.opacity = "0";
	};
	if (val === "")	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.noContent;
		fail();
	    return;
	}
	if (!val.match(regExpTx) && id !== email && id !== message)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.hasInvalid;
	    fail();
	    return;
	}
	if (val.length < 2 && id === firstName)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.nameIsShort;
	    fail();
	    return;
	}
	if (val.length < 2 && id === surname)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.nameIsShort;
	    fail();
	    return;
	}
	if (!val.match(regExpEm) && id === email)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.notEmail;
	    fail();
	    return;
	}
	if (val.length < 4 && id === subject)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.subIsShort;
	    fail();
	    return;
	}
	if (!val.match(regExpMsg) && id === message)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.hasInvalid;
	    fail();
	    return;
	}
	if (val.length < 20 && id === message)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.msgIsShort;
	    fail();
	    return;
	}
	if (val.length > 254)	{
		errorMsg[index].innerHTML = indexMsg[index] + errMsg.isLong;
	    fail();
	    return;
	}
	errorMsg[index].innerHTML = "";
    id.style.border = "2px solid green";
    failureIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	validate(firstName, 0);
	validate(surname, 1);
	validate(email, 2);
	validate(subject, 3);
	validate(message, 4);
});

// Off Screen Menu

const hamMenu	= document.querySelector('.hamburger-menu'),
	  offScreen	= document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreen.classList.toggle('active');
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

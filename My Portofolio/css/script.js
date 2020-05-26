// grab all links
let logo = document.querySelector("#logo");
let aboutLink = document.querySelector("#aboutLink");
let skillsLink = document.querySelector("#skillsLink");
let contactlink = document.querySelector("#contactlink");
// grab all selection
let main = document.querySelector("#main");
let abaout = document.querySelector("#about");
let skills = document.querySelector("#skills");
let contact = document.querySelector("#contact");
//grab all elements of main section for animation
let mainH1 =document.querySelector("#main h1");
let mainH12 =document.querySelector("#main h1:nth-child(2)");
let mainPara =document.querySelector("#main p");
let mainAnker =document.querySelector("#main a");
//grab elements of about section for animation
let aboutH1 =document.querySelector("#about h1");
let aboutPara =document.querySelector("#about p");
let aboutAnker =document.querySelector("#about a");
//grab elements of skills section for animation
let skillsH1 =document.querySelector("#skills h1");
let skillsPara =document.querySelector("#skills p");
let skillsCard =document.querySelector("#skills .skills-card");
//grab elements of content section for  animation
let contactH1 =document.querySelector("#contact h1");
let contactForm =document.querySelector("#contact form");
let contactAnker =document.querySelector("#contact a");


function handleOpacity(opacityOne, opacityZero1, opacityZero2, opacityZero3){
	opacityOne.style.opacity = 1;
	opacityZero1.style.opacity = 0;
	opacityZero2.style.opacity = 0;
	opacityZero3.style.opacity = 0;
}

function handleAnimation() {
	for(let i=0; i<arguments.length; i++) {
		arguments[i].classlist.remove('animation')
		arguments[i]offsetWidth;
		arguments[i].classlist.add('animation')
	}
}

logo.addEventListener("click", function() {
	handleOpacity(main, about, skills, contact);
	handleAnimation(mainH1, mainH12, mainPara, mainAnker);
});
aboutLink.addEventListener("click", function() {
	handleOpacity(about, main, skills, contact);
	handleAnimation(aboutH1, aboutPara, aboutAnker);
});
skillsLink.addEventListener("click", function() {
	handleOpacity(skills, main, about, contact);
	handleAnimation(skillsH1, skillsPara, skillsCard);
});
contactlink.addEventListener("click", function() {
	handleOpacity(contact, main, about, skills);
	handleAnimation(contactH1, contactForm, contactAnker);
});
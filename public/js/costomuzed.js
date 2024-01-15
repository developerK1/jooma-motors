// updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );
	
	let thisYear = new Date();
	let newYear = thisYear.getFullYear();
	
	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const searchBtn = document.querySelector("#search-form button");
const contactFrom  = document.querySelectorAll(".contact-from button");

searchBtn.addEventListener("click",formActions);

contactFrom.forEach(form => form.addEventListener("click",formActions))

function formActions(e){
	e.preventDefault();

	openModal('funtionality')
}

////////////////////////////////////////////////////////////
function openModal(id){
    const elem = document.querySelector(`#${id}`);

console.log(document.querySelector(`#${id}`))

    elem.classList.add("open-modal");
    console.log(`Modal ${elem} show be open at this time`)
}


function closeModal(id){
    const elem = document.querySelector(`#${id}`);

    elem.classList.remove("open-modal");
    console.log(`Modal ${elem} show be closed at this time`)
}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const navBarUl = document.querySelector("nav ul");
const pageSections = document.querySelectorAll("section");
const lines = document.querySelectorAll(".lines");

hamburger.addEventListener("click", function(){
	navBarUl.classList.toggle("mobile-view");

	navBarUl.className === "mobile-view" ? hideAllSections() : showAllsections();

	//HIDDEING ALL SECTIONS ON OPEN MENU
	function hideAllSections(){
		pageSections.forEach(section => section.classList.add("hideThis"));
		lineAnimationsOn();
		document.querySelector("footer").classList.add("hideThis");
	}

	//SHOWING ALL SECTIONS ON CLOSED MENU
	function showAllsections(){
		pageSections.forEach(section => section.classList.remove("hideThis"));
		lineAnimationsOff()
		document.querySelector("footer").classList.remove("hideThis");
	}
})



//
function lineAnimationsOn(){
	let counter = 1 ;

	lines.forEach((line , index)=>{
		let activeClass = "lines" + counter;
		counter++;
		line.classList.add(activeClass)
	})

}

function lineAnimationsOff(){
	let counter = 1 

	lines.forEach((line)=>{
		let activeClass = "lines" + counter;
		counter++;
		line.classList.remove(activeClass)
	})

}




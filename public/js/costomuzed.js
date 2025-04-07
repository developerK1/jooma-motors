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






//SEACH FUCNTOIPM
const drivers = [
	{
	  id: "6524fe2712d4f16d1fb6190ef" ,
	  make : "Mazda",
	  name : "Mazda CX-3",
	  year : 2017,
	  coulor : "Whitish",
	  engine : "2.1 L",
	  preOwned : "Yes",
	  img : "mazdacx-3-2.jpg",
	  price : "63 000",
	  mileage : "99 754",
	  priceRange : "50 000.00 - 120 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Automatic",
		doors : 4,
	  },
	  heroImg : "mazdacx-3-1.jpg",
	  assosImgs : ["mazdacx-3-2.jpg","mazdacx-3-3.jpg","mazdacx-3-1.jpg"]
	},
	{
	  id: "6524fe27f12d4f16d1b6190ef2" ,
	  make : "Renault",
	  name : "Renualt Dustin",
	  year : 2020,
	  coulor : "Dark Grey",
	  engine : "1.5 L",
	  preOwned : "Yes",
	  img : "renault-dustin-2.jpg",
	  price : "52 000",
	  mileage : "99 754",
	  priceRange : "10 000.00 - 50 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "renault-dustin-1.jpg",
	  assosImgs : ["renault-dustin-1.jpg","renault-dustin-2.jpg","renault-dustin-3.jpg"]
	},
	{
	  id: "6524fe2f712d4f16d1b6190ef" ,
	  make : "VolksWagen",
	  name : "Gold Gti",
	  year : 2017,
	  coulor : "Silver",
	  engine : "2 L",
	  preOwned : "Yes",
	  img : "golf-gti-2.jpg",
	  price : "48 000",
	  mileage : "77 754",
	  priceRange : "50 000.00 - 120 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Automatic",
		doors : 4,
	  },
	  heroImg : "golf-gti-1.jpg",
	  assosImgs : ["golf-gti-1.jpg","golf-gti-2.jpg","golf-gti-3.jpg"]
	},
	{
	  id: "6524fe2f712d4f16d1b6190ef" ,
	  make : "VolksWagen",
	  name : "Gold Gti",
	  year : 2019,
	  coulor : "Dark Grey",
	  engine : "2 L",
	  preOwned : "Yes",
	  img : "golf-gti3-2.jpg",
	  price : "82 000",
	  mileage : "77 754",
	  priceRange : "50 000.00 - 120 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Automatic",
		doors : 4,
	  },
	  heroImg : "golf-gti-1.jpg",
	  assosImgs : ["golf-gti3-1.jpg","golf-gti3-2.jpg","golf-gti3-3.jpg"]
	},
	{
	  id: "6524fe2712d4f16d1gb6190ef" ,
	  make : "VolksWagen",
	  year : 2017,
	  coulor : "Blue",
	  engine : "2 L",
	  preOwned : "Yes",
	  img : "golf-gti2-2.jpg",
	  price : "72 000",
	  mileage : "77 754",
	  priceRange : "50 000.00 - 120 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Automatic",
		doors : 4,
	  },
	  heroImg : "golf-gti2-1.jpg",
	  assosImgs : ["golf-gti2-1.jpg","golf-gti2-2.jpg","golf-gti2-3.jpg"]
	},
	{
	  id: "652s4fe2712d4f16d1b6190ef" ,
	  make : "VolksWagen",
	  year : 2014,
	  coulor : "White",
	  engine : "1.6 L",
	  preOwned : "Yes",
	  img : "polo-vivo-2.jpg",
	  price : "89 000",
	  mileage : "77 754",
	  priceRange : "10 000.00 - 50 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "polo-vivo-1.jpg",
	  assosImgs : ["polo-vivo-1.jpg","polo-vivo-2.jpg","polo-vivo-3.jpg"]
	},
	{
	  id: "6524fe2712d4f16dg1b6190ef" ,
	  make : "VolksWagen",
	  year : 2015,
	  coulor : "Red",
	  engine : "1.6 L",
	  preOwned : "Yes",
	  img : "polo-hatch-2.jpg",
	  price : "42 000",
	  mileage : "97 00",
	  priceRange : "10 000.00 - 50 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "polo-hatch-1.jpg",
	  assosImgs : ["polo-hatch-1.jpg","polo-hatch-2.jpg","polo-hatch-3.jpg"]
	},
	{
	  id: "6524fe2712d4f1sg6d1b6190ef" ,
	  make : "Toyota",
	  name : "Toyota Hilux",
	  year : 2019,
	  coulor : "Silver White",
	  engine : "2.8 L",
	  preOwned : "Yes",
	  img : "toyota-hilux-2.jpg",
	  price : "165 000",
	  mileage : "69 00",
	  priceRange : "120 000.00 - 320 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 2,
		fuelType : "Diesel",
		gearbox : "Manual",
		doors : 2,
	  },
	  heroImg : "toyota-hilux-1.jpg",
	  assosImgs : ["toyota-hilux-1.jpg","toyota-hilux-2.jpg","toyota-hilux-3.jpg"]
	},
	{
	  id: "652a4fe2712d4f16d1b6190efa" ,
	  make : "BMW",
	  name : "BMW F30",
	  year : 2016,
	  coulor : "White",
	  engine : "2.8 L",
	  preOwned : "Yes",
	  img : "bmw-f30-2.jpg",
	  price : "40 000",
	  mileage : "70 000",
	  priceRange : "120 000.00 - 320 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "bmw-f30-1.jpg",
	  assosImgs : ["bmw-f30-1.jpg","bmw-f30-2.jpg","bmw-f30-3.jpg"]
	},
	{
	  id: "6524fe2a712d4ff16d1b6190egf" ,
	  make : "Hyundai",
	  name : "Hyundai i20",
	  year : 2017,
	  coulor : "White",
	  engine : "1.2 L",
	  preOwned : "Yes",
	  img : "hyundai-i20-2.jpg",
	  price : "30 000",
	  mileage : "59 000",
	  priceRange : "10 000.00 - 50 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "hyundai-i20-1.jpg",
	  assosImgs : ["hyundai-i20-1.jpg","hyundai-i20-2.jpg","hyundai-i20-3.jpg"]
	},
	{
	  id: "6524fe2712d4f16d1b6190effdagb" ,
	  make : "Toyota",
	  name : "Toyota Hilux",
	  year : 2020,
	  coulor : "White",
	  engine : "2.8 L",
	  preOwned : "Yes",
	  img : "toyota-hilux2-2.jpg",
	  price : "97 000",
	  mileage : "30 156",
	  priceRange : "50 000.00 - 120 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "toyota-hilux-1.jpg",
	  assosImgs : ["toyota-hilux2-1.jpg","toyota-hilux2-2.jpg","toyota-hilux2-3.jpg"]
	},
	{
	  id: "6524fe2712fd4f16d1b6190efhnoq" ,
	  make : "Audi",
	  name : "Audi Sportback",
	  year : 2020,
	  coulor : "Purple Blue",
	  engine : "2.8 L",
	  preOwned : "Yes",
	  img : "audi-sportback-30tf-2.jpg",
	  price : "98 000",
	  mileage : "66 156",
	  priceRange : "50 000.00 - 120 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Petrol",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "audi-sportback-30tf-1.jpg",
	  assosImgs : ["audi-sportback-30tf-1.jpg","audi-sportback-30tf-2.jpg","audi-sportback-30tf-3.jpg"]
	},
	{
	  id: "6524fe2g712d4f14t16d1b6190ef" ,
	  make : "Mercedes Benz",
	  name : "Mercedes C200",
	  year : 2018,
	  coulor : "Silver Grey",
	  engine : "2.8 L",
	  preOwned : "Yes",
	  img : "mercedes-c200-2.jpg",
	  price : "86 000",
	  mileage : "53 156",
	  priceRange : "50 000.00 - 120 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 2,
		fuelType : "Petrol",
		gearbox : "Automatic",
		doors : 2,
	  },
	  heroImg : "mercedes-c200-1.jpg",
	  assosImgs : ["mercedes-c200-1.jpg","mercedes-c200-2.jpg","mercedes-c200-3.jpg"]
	},
	{
	  id: "6b524fe2712d4f16f735d1b6190ef" ,
	  make : "Mercedes Benz",
	  name : "Mercedes Benz X-Class",
	  year : 2019,
	  coulor : "White ",
	  engine : "2.8 L",
	  preOwned : "Yes",
	  img : "Benz-x-class-2.jpg",
	  price : "210 000",
	  mileage : "83 156",
	  priceRange : "120 000.00 - 320 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Diesel",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "Benz-x-class-1.jpg",
	  assosImgs : ["Benz-x-class-1.jpg","Benz-x-class-2.jpg","Benz-x-class-3.jpg"]
	},
	{
	  id: "6524fe2712d4f16d1b6190e394sf f" ,
	  make : "Opel Corsa",
	  name : "Opel Utility Bakkie",
	  year : 2008,
	  coulor : "White ",
	  engine : "1.4 L",
	  preOwned : "Yes",
	  img : "opel-tility-2.jpg",
	  price : "22 000",
	  mileage : "93 156",
	  priceRange : "10 000.00 - 50 000.00",
	  specifications : {
		TopSpeed : "100 and more",
		seats : 4,
		fuelType : "Diesel",
		gearbox : "Manual",
		doors : 4,
	  },
	  heroImg : "opel-tility-1.jpg",
	  assosImgs : ["opel-tility-1.jpg","opel-tility-2.jpg","opel-tility-3.jpg"]
	},
	
]


// const formBtn = document.querySelector("#search-btn button");

// if(formBtn != undefined){
// 	formBtn.addEventListener("click", function(e){
// 		e.preventDefault();
	
// 		let brand = document.querySelector("#car-brands").value;
// 		let range = document.querySelector("#range").value;
	
// 		console.log(range)
// 	})
// }



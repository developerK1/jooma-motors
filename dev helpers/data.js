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
    make : "Renualt",
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
    make : "Mercedes Benze",
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
    make : "Mercedes Benze",
    name : "Mercedes Benze X-Class",
    year : 2019,
    coulor : "White ",
    engine : "2.8 L",
    preOwned : "Yes",
    img : "benze-x-class-2.jpg",
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
    heroImg : "benze-x-class-1.jpg",
    assosImgs : ["benze-x-class-1.jpg","benze-x-class-2.jpg","benze-x-class-3.jpg"]
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


// const generateSql = () => {
//   let sql = "";

//   drivers.forEach( driver =>{
//     sql+= `('${driver.location}', '${driver.imgper}' , '${driver.imgcar}' , '${driver.name}', '${driver.car}'),`
//   })
// console.log(sql)

// }
// generateSql()


/*



 {
    id: "6524fe2712d4fgn16d1b6190efu" ,
    make : "Ford Fortuner",
    name : "Ford Fortuner",
    year : 2012,
    coulor : "Silver Grey",
    engine : "3.0 L",
    preOwned : "Yes",
    img : "ford-fortuner-2.jpg",
    price : "120 000",
    mileage : "53 156",
    priceRange : "50 000.00 - 120 000.00",
    specifications : {
      TopSpeed : "100 and more",
      seats : 4,
      fuelType : "Diesel",
      gearbox : "Automatic",
      doors : 4,
    },
    heroImg : "ford-fortuner-1.jpg",
    assosImgs : ["ford-fortuner-1.jpg","ford-fortuner-2.jpg","ford-fortuner-3.jpg"]
  },
 

*/


// const data =  [{"id":1,"location":"Mafikeng - Litenburg","imgper":"/assets/person.png","imgcar":"/assets/audi.jpg","name":"Karabo","car":"Mazda","pasword":""},{"id":2,"location":"Zeerust - Rutenburg","imgper":"/assets/person.png","imgcar":"/assets/audi.jpg","name":"Karabo","car":"Mazda","pasword":""},{"id":3,"location":"Rusternburg - Pretoria","imgper":"/assets/person.png","imgcar":"/assets/audi.jpg","name":"Karabo","car":"Mazda","pasword":""},{"id":4,"location":"Mafikeng - Zeerust","imgper":"/assets/person.png","imgcar":"/assets/audi.jpg","name":"Karabo","car":"Mazda","pasword":""},{"id":5,"location":"Phokeng - Mogwase","imgper":"/assets/person.png","imgcar":"/assets/audi.jpg","name":"Karabo","car":"Mazda","pasword":""},{"id":6,"location":"Brits - Pretoria","imgper":"/assets/person.png","imgcar":"/assets/audi.jpg","name":"Karabo","car":"Mazda","pasword":""}]








module.exports = drivers;
const router = require('express').Router();
const data = require("../dev helpers/data");
const details = require("../dev helpers/dynamics");


// const db = require ("../config/db/db.config");



//GET ALL ADS
router.route('/').get((req, res) => res.render("home", {title:"index", data : data , details : details }));


//GET ALL SINGLE RECORD
router.route('/specifications/:id').get((req, res) => {
    const record = data.filter(item => item.id === req.params.id);

    res.render("specifications", {title:"More Info", record: record, details : details })  
});

router.route('/get-in-touch').get((req, res) => res.render("notyetcreated", {title:"Contact US",details : details}));

router.route('/about').get((req, res) => {
    res.render("notyetcreated", {title:"about"})  
});

router.route('/faqs').get((req, res) => {
    res.render("notyetcreated", {title:"about"})  
});



router.route('/filter').post((req, res) => {

    

    const makeData = data.filter( item => item.make == req.body.make)

    const results = makeData.filter(item => item.priceRange == req.body.range)


    res.render("home", {title:"index", data : data, search : results, details : details})
});



/*

const sql = `SELECT * FROM drivers WHERE id = '${req.params.id}'`;

    db.query(sql, (err, results)=>{


        if(!err){

             res.render("details", {title:"Details" , driver : results})
        }else {
            console.log("data coudnt be fetch at this moment");
        }			
        
        
    });

    =================================================================

    // db.query("SELECT * FROM `drivers`",async  (err, results)=>{
   
            
    //     let data = await JSON.stringify(results);
    //     data = await JSON.parse(data);

        
    //     if(!err){
    //         res.render("home", {title:"index", drivers : data})
    //     }else {
    //         console.log("data coudnt be fetch at this moment");
    //     }			
        
    // });



//Contacts
router.route('/get-in-touch').get((req, res) => res.render("get-in-touch", {title:"Contact US",details : details}));




router.route('/').get((req, res) => {
    res.render("home", {title:"index"})  
});

router.route('/about').get((req, res) => {
    res.render("about", {title:"about"})  
});

router.route('/get-in-touch').get((req, res) => {
    res.render("about", {title:"contact"})  
});






*/






module.exports = router;

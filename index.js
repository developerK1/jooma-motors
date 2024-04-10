const express = require('express');

const app = express();
const bodyParser = require('body-parser');

//Modules
// const db = require ("./config/db/db.config");
const contentRoute =  require ("./routes/content.routes");
const data = require("./dev helpers/data");

port =  process.env.PORT || 6060;
app.set('view engine', 'ejs');
app.set("static", 'public');
app.use(bodyParser.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))


const axios = require('axios');

// Define the URL you want to fetch data from
const url = 'http://localhost/ajax%20calls/function.php';

// Perform the HTTP GET request using axios

// app.get("/", (req, res)=>{
//     axios.get(url)
//   .then((response) => {
//     res.send(response.data);
//   })
//   .catch((error) => {
//     console.error(`Error fetching data: ${error.message}`);
//     res.json({data : "failed"})
//   });

// })


//ROUTES
app.use("/", contentRoute)

//APP TO LISTEN
app.listen(port, ()=>console.log(`Server running on ${port} press Ctl-C to terminate`));
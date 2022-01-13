const express = require('express');
const cors = require('cors');

const app = express();

var corsOtions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOtions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require('./app/models');
db.sequelize.sync();
// db.sequelize.sync({force: true}).then(()=>{
//     console.log("Drop and re-sync db.")
// });

app.get("/", (req,res)=>{
    res.json({ message: "Welcome to CURD Application."})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
})
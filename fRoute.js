const express = require("express")
const router = express.Router()
const mysql = require("mysql")

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "admin",
    database : "mydb"
});

router.get("/",(req,res)=>{
    res.render('index')
})

router.get("/fetch",(req,res)=>{
    const sql = "select * from reg";
    con.query(sql,(err, result, fields)=>{
        // console.log(result);
        res.render("fetch",{data:result})
        
    })
    
})

//update
router.get("/fetch/edit-form/:id",(req,res)=>{
    const id = req.params.id
    // console.log(id);
    const sql = `select * from reg where id = ${id}`;
    con.query(sql,(err,result,fields)=>{
        res.render("update",{data : result[0]})
    })
    
    
})



module.exports = router;

// module.exports = (app) =>{

//     var data = ['sleep','code']

//     app.get("/", (req,res)=>{
//         res.render('index',{wish:data})
//     })
// }
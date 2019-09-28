const express = require("express")
const router = express.Router()
const mysql = require("mysql")

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "admin",
    database : "mydb"
});

// con.connect((err)=>{
//     // if(err) throw err
//     console.log("Connected");
//     const sql = "select * from customers";
//     con.query(sql,(err, result, fields)=>{

//         console.log(result);
        
//     })
// })
//  insert
router.post("/reg",(req,res)=>{
    // console.log(req.body);
    
        const sql = `insert into reg (email,passw) values ("${req.body.email}","${req.body.pass}")`;
        const ql = "select * from reg;"
        con.query(sql,(err, result, fields)=>{
            // console.log(result);
            res.redirect("/fetch")
        })  
})

router.post("/edit/:id",(req,res)=>{
    const id = req.params.id
    const sql = `update reg set email="${req.body.email}", passw="${req.body.pass}" where id=${id}`;
    con.query(sql,(err,result,fields)=>{
        res.redirect("/fetch")
    })
})

router.get("/fetch/delete/:id",(req,res)=>{
    const id = req.params.id;
    console.log("ID");
    
    console.log(id);
    
    const sql = `delete from reg where id = ${id}`;
    con.query(sql,(err,result, fields)=>{
        if (err) throw err;
        res.redirect("/fetch")
    })
})

module.exports = router;
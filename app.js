const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")

const fontEnd = require("./fRoute")
const backEnd = require("./bRoute")

app.use(fontEnd)
app.use(backEnd)

app.listen(3000)
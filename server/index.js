const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const mongourl = "mongodb+srv://cypherlynk:0hjdu2ELogSIZHg7@takeit-dev.qzbp3om.mongodb.net/?retryWrites=true&w=majority&appName=Takeit-dev"
const Product = require("./Schemas/product")
const googleCustomSearchKey = "AIzaSyB9PTEFkIwAaphoa31BlT8RxjGaNBNBbFg"
const SearchEngineID = '838ab5d19f5ed4e3a'
const GoogleImages = require("google-images")
const client = new GoogleImages(SearchEngineID, googleCustomSearchKey)

const corsOptions = {
    origin: ["http://localhost:3000", '*', "http://192.168.1.17:3000"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
 };
app.use(express.json())
app.use(cors(corsOptions))
mongoose.Promise = global.Promise
mongoose.connect(mongourl)

app.get("/", (req,res) => {
    const pros = Product.find({}).then(items => {
        res.send(items)
    })
})

app.post("/get/product/image", (req, res) => {
    client.search(req.body.name).then(images => {
        // console.log(images);
        res.send(images)
    })
    // console.log(req.body);
    // res.send("get Product Images")
})

app.post("/post/product/image", (req, res) => {
    console.log(req.body);
    res.send("I will be saving your desired image to my database with the appropriate product. Thank you.")
})

app.listen(2000, ()=> {
    console.log("Server running on port 2000");
})



{/* <script async src="https://cse.google.com/cse.js?cx=838ab5d19f5ed4e3a">
</script>
<div class="gcse-search"></div> */}
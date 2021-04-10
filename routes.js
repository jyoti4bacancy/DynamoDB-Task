const express=require("express")
const router=express.Router()
const {createTable}=require('./CRUD/create')
const {addMovie,updateMovieScore}=require('./CRUD/insert-Update-Op')
const {getAllMovies,getMovie}=require("./CRUD/selectOp")
const {deleteMovie}=require('./CRUD/deleteOp')

router.post("/",(req,res)=>{
    res.send("Welcome To the DynamoDB World!!")
})
router.post("/createTable",createTable)
router.post("/addMovie",addMovie)
router.post("/updateMovie",updateMovieScore)
router.post("/getAllMovies",getAllMovies)
router.post("/getMovie",getMovie)
router.post("/deleteMovie",deleteMovie)



module.exports=router;

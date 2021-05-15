const request=require('supertest')
const app=require('./app')
const dynamoDB=require('./config')
describe("crud Operation",()=>{

    afterEach(() => {
        jest.resetModules()
      })

    // test("should return table created",async()=>{
    //   await request(app).post('/createTable').send({
    //       TableName:"ddp"
    //   }).expect(201)
    // })

    
    test("table is already exist",async()=>{
        await request(app).post('/createTable').send({
            TableName:"Web"
        }).expect(404)
    })


    test("add movie as expected",async()=>{
        
        await request(app).post('/addMovie').send({
            title:"K3G",
            rateScore:"50"
        }).expect(200)
    })

    test("title or ratescore is not provided --error",async()=>{
        
        await request(app).post('/addMovie').send({
            title:"",
            rateScore:""
        }).expect(400)
    })


    test("movie is updated as expected",async()=>{
        
        await request(app).post('/updateMovie').send({
            title:"K3g",
            rateScore:30
        }).expect(200)
    })
    test("update movie title is not provided and rateScore is String --error",async()=>{
        
        await request(app).post('/updateMovie').send({
            title:"",
            rateScore:""
        }).expect(400)
    })


    test("movie is deleted as expected",async()=>{
        
        await request(app).post('/deleteMovie').send({
            title:"ghj"
        }).expect(200)
    })
    test("delete is not exist  --error",async()=>{
        
        await request(app).post('/deleteMovie').send({
            title:"khh"
        }).expect(400)
    })
    test("movie name is empty --error",async()=>{
        
        await request(app).post('/deleteMovie').send({
            title:""
        }).expect(406)
    })

    
    test("get all movies as expected",async()=>{
        
        await request(app).post('/getAllMovies')
        .send()
        .expect(200)
    })

    test("get single movie as expected",async()=>{
        
        await request(app).post('/getMovie').send({
            title:"Avenger"
        }).expect(200)
    })

    
    test("get single movie as expected",async()=>{
        
        await request(app).post('/getMovie').send({
            title:"Avengerss"
        }).expect(404)
    })
})
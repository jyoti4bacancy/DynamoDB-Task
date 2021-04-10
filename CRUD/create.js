const dynamoDB=require('../config')

const createTable=(req,res)=>{
    const params={
        TableName:req.body.TableName,
        KeySchema:[{ AttributeName:"title", KeyType:"HASH"}],
        AttributeDefinitions:[{ AttributeName:"title", AttributeType:"S"}],
        ProvisionedThroughput:{
            ReadCapacityUnits:10,
            WriteCapacityUnits:10
        }
    };
    dynamoDB.createTable(params,function(err,data){
        if(err){
            console.error("unable to create table"+err);
            res.status(404).send(err)
        }
        else{
            console.log("table created"+data);
            res.status(201).send("table is created successfully")
        }
      })
    
}



// function createTable(){
//     const params={
//         TableName:"Movies",
//         KeySchema:[{ AttributeName:"title", KeyType:"HASH"}],
//         AttributeDefinitions:[{ AttributeName:"title", AttributeType:"S"}],
//         ProvisionedThroughput:{
//             ReadCapacityUnits:10,
//             WriteCapacityUnits:10
//         }
//     };
//     dynamoDB.createTable(params,function(err,data){
//         if(err){
//             console.error("unable to create table"+err);
//         }
//         else{
//             console.log("table created"+data);
//         }
//       })
// }


module.exports={
    createTable
}
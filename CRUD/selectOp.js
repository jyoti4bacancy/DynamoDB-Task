const dynamoDB=require("../config")

const getAllMovies=(req,res)=> {
    const params = {
      TableName: "Movies"
    };
  
    dynamoDB.scan(params, function(err, data) {
      if (err) {
        console.error("Unable to find movies", err);
        res.status(400).send(err)
      } else {
        console.log("Found " +data.Count+ " movies");
        console.log(data.Items);
      
        res.status(200).send(data.Items)
      }
    });
  }

  const getMovie=(req,res)=> {
    let title=req.body.title
    function getData(title){
      const params = {
        TableName: "Movies",
        Key: {
          title: { S: title }
        }
      };
    
      dynamoDB.getItem(params, function(err, data) {
        if (err) {
          console.error("Unable to find movie", err);
          res.status(400).send(err)
        } else {
          console.log("Found movie", data.Item);
          if(data.Item===undefined){
           return  res.status(404).send("movie is not exist")
          }
        return  res.status(200).send(data.Item)
        }
      });
  
    }
    getData(title)
 }

  module.exports={
     getAllMovies,
     getMovie     
  };
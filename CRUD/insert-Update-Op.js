const dynamoDB=require('../config')

const addMovie=(req,res)=>{
  let title=req.body.title
  let rateScore=req.body.rateScore
  console.log(title, rateScore);

  function setData(title,rateScore){
    const params={
      TableName:"Movies",
      Item:{
            title:{S: title},
            rateScore: {N: rateScore}
          }
          
      };
  
      dynamoDB.putItem(params,function(err){
          if(err){
              console.error("unable to add movie"+err);
              res.send(err)
          }
          else{
              console.log(title+" movie added with "+rateScore+" rate");
              res.send(title+" movie added with "+rateScore+" rate")
          }
      })
  }
  setData(title,rateScore)

}

const updateMovieScore=(req,res)=> {
let title= req.body.title
let newRateScore=req.body.rateScore
function updateData(title,newRateScore){
  const params = {
    TableName: "Movies",
    Item: {
      title: { S: title },
      rateScore: { N: newRateScore.toString() }
    },
    ReturnConsumedCapacity: "TOTAL"
  };

  dynamoDB.putItem(params, function(err) {
    if (err) {
      console.error("Unable to find movie", err);
      res.send(err)
    } else {
      console.log(`Updated ${title} with new Rate Score of ${newRateScore}%`);
      res.send(`Updated ${title} with new Rate Score of ${newRateScore}%`)
    }
  });
}
updateData(title,newRateScore)
}

module.exports={
    addMovie,
    updateMovieScore
}
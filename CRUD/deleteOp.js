const dynamoDB=require('../config')

const deleteMovie=(req,res) =>{
	let title=req.body.title
	function deleteData(title){
	
		const params = {
			TableName: "Movies",
			Key: {
				title: { S: title }
			}
		};
	
  
		dynamoDB.getItem(params, function(err, data) {
			if (err) {
			  console.error("Unable to find movie", err);
			  res.status(406).send(err)
			} else {
				if(data.item===title){
					dynamoDB.deleteItem(params, function(err) {
						if (err) {
							console.log("Unable to find movie", err);
							res.status(500).send(err)
						} else {
							console.log("deleted Movie: "+title);
							res.status(200).send("deleted Movie: "+title)
						}
					});
					}
					else{
						res.status(400).send("movie is not exist")
					}
				
			}
		  });
	  


		
	}
	deleteData(title)
}

module.exports={
    deleteMovie
}
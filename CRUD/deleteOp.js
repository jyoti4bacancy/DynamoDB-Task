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
	
		dynamoDB.deleteItem(params, function(err) {
			if (err) {
				console.error("Unable to find movie", err);
				res.send(err)
			} else {
				console.log("deleted Movie: "+title);
				res.send("deleted Movie: "+title)
			}
		});
	}
	deleteData(title)
}

module.exports={
    deleteMovie
}
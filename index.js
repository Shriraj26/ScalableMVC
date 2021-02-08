const express = require('express');

const app = express();
const port = 8000;



app.listen(port, function(err){
	if (err){
		console.log(`Error while running to the server - ${err}`);
		return; 
	}
	console.log(`Server running successfully on port - ${port}`);
	//temp
});
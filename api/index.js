const express = require('express');
const app = express();  

/* Route Handlers*/

/* List Routes*/

/* Get Lists*/
app.get('/lists', (req, res) => {  
//Return an array of lists
    res.send('Hello World');
})

/* Post List*/
app.post('/lists', (req, res) => {
    //create new list and return the new list document back to the user (which includes the id)
    //the list information (fields) will be passed in via the JSON request body
})

/* Patch List*/
app.patch('/lists/:id', (req, res) => {
    //update specified list (list document with id in the URL) with new values specified in the JSON body of the request
})

/* Delete List*/
app.delete('/lists/:id', (req, res) => {
    //delete specified list (document with id in the URL)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const express = require("express");
const app = express();
const { mongoose } = require("./db/mongoose");
//Load in the mongoose models
const { List, Task } = require("./db/models");

//Load middleware
app.use(express.json());

/* Get Lists*/
app.get("/lists", (req, res) => {
  //Return an array of lists
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

/* Post List*/
app.post("/lists", (req, res) => {
  //create new list and return the new list document back to the user (which includes the id)
  //the list information (fields) will be passed in via the JSON request body
  let title = req.body.title;

  let newList = new List({
    title,
  });
  newList.save().then((listDoc) => {
    //the full list document is returned (incl. id)
    res.send(listDoc);
  });
});

/* Patch List*/
app.patch("/lists/:id", (req, res) => {
  //update specified list (list document with id in the URL) with new values specified in the JSON body of the request
  List.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

/* Delete List*/
app.delete("/lists/:id", (req, res) => {
  //delete specified list (document with id in the URL)
  List.findOneAndDelete(
    {
    _id: req.params.id,
  }
  ).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

app.get("/lists/:listId/tasks", (req, res) => {
    //return all tasks that belong to a specific list (specified by listId)
    Task.find({
        _listId: req.params.listId,
    }).then((tasks) => {
        res.send(tasks);
    });
});

app.post("/lists/:listId/tasks", (req, res) => { 
    //create new task in a list specified by listId
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId,
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    }); 
});

app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
    //update an existing task (specified by taskId)
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId,
    }, {
        $set: req.body,
    }
    ).then(() => {
        res.send({message: 'Updated successfully.'});
    });
});

app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
    //delete a task (specified by taskId)
    Task.findOneAndDelete({
        _id: req.params.taskId,
        _listId: req.params.listId,
    }
    ).then((removedTaskDoc) => {
        res.send(removedTaskDoc);
    });
});

app.get("/lists/:listId/tasks/:tasks", (req, res) => {
    //return all tasks that belong to a specific list (specified by listId)
    Task.find({
        _listId: req.params.listId,
    }).then((tasks) => {
        res.send(tasks);
    });
});  

app.get("/lists/:listId/tasks/:taskId", (req, res) => {
    //return a specific task (specified by taskId)
    Task.findOne({
        _id: req.params.taskId,
        _listId: req.params.listId,
    }).then((task) => {
        res.send(task);
    });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
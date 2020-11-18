const express = require('express');
const router = express.Router();

//Show Task
router.get('/', async(req,res)=>{
    res.render('pages/todo', {tasks: req.session.tasks});
});

//Add tasks
router.post('/add', async(req,res)=>{
    //If no task, create one
    if(!req.session.tasks){
        req.session.tasks = [];
    }

    //Add task
    const newTask = req.body.taskName;
    req.session.tasks.push(newTask);

    res.redirect('/todo');
});

//Remove Task
router.post('/done/:index',async(req,res)=>{
    //Get current index
    const index = req.params.index;

    //Delete specific task
    if (req.session.tasks && index < req.session.tasks.length){
        req.session.tasks.splice(index,1);
    }

    res.redirect('/todo');
})

module.exports = router;
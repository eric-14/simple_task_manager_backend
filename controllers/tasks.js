//const datetime = require("Date")

const { json } = require("body-parser");

const db = require("../controllers/firebase");

const asyncWrapper = require("../midddleware /asyncWrapper")
//console.log("line 4",db);
const docRef = db.collection("tasks");





const getAllTasks = asyncWrapper( async (req,res)=>{
    //res.send("all items from get all tasks")
    console.log("line 17 getAllTasks")
    const tasks = {};
    const docs = await docRef.get();
    docs.forEach(doc => {
    // console.log("line 12",doc.id)
    tasks[doc.id]=doc.data()
    });

    res.status(200).json(tasks);

    
})

const createTasks = asyncWrapper( async (req,res)=>{

    let tasks = {};
    console.log("Line 45 Create Tasks inside tasks.js", req.body.tasks)
    
    await docRef.add({
    tasks:req.body.tasks,
    date: Date.now()
    })
    const docs = await docRef.get();
    
    docs.forEach(doc=>{tasks[doc.id]=doc.data()});
    //console.log("line 31 ", tasks)

    res.status(201).json(tasks)  

})

const getTask = asyncWrapper (async (req,res)=>{
    
    const doc = await docRef.doc(req.params.id)
    const doc2 = await doc.get()
    
    if(!doc2.data()){
        
        return res.status(404).json({msg : `No task with id : ${req.params.id}`})
    }

    res.status(200).json(doc2.data())
})

const updateTask = asyncWrapper(async (req,res)=>{
    
    const ret = await docRef.doc(req.params.id).update({
        tasks:req.body.tasks
    })  
})
const DeleteTask = asyncWrapper( async (req,res)=>{
        const time = await docRef.doc(req.params.id).delete()
        console.log("line 91 ", time)
        docRef.
        res.status(200).json({
            "completed":"true"
        })
})
module.exports= {
    getTask,
    getAllTasks, 
    createTasks,
    updateTask,
    DeleteTask
}
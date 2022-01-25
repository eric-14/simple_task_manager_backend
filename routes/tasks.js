const express= require("express");

const router =  express.Router();

const {getTask,getAllTasks,createTasks,updateTask,DeleteTask} =  require("../controllers/tasks")

router.route("/").get(getAllTasks).post(createTasks)
router.route("/:id").get(getTask).patch(updateTask).delete(DeleteTask)


module.exports = router
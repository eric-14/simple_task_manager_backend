const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const notfound = require("./midddleware /not-found")
const err_handler = require("./Error_handler/err_handler")


const port = process.env.PORT || 3000;

//middleware 
app.use(express.json())
app.use(notfound)
app.use(err_handler)


app.use('/api/v1/tasks',tasks)


app.listen(port, console.log(`server is listening on port ${port}`));

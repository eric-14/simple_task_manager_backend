const err_handler = (err,req,res,next) =>{
    return res.status(500).json({ msg : err})
}

module.exports = err_handler
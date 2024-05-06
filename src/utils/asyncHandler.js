
const asyncHandler = (requseHandler) =>{
    (res , req , next) => {
        Promise
        .resolve(requseHandler(req , res , next))
        .catch((err) => next(err)) 
    }
}
/*
# try , catch metod

const asyncHandler = (fn) => async (req , res , next) => {
    try{
        await(req , res , next)
    }catch{
        res.send( err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/

export{asyncHandler}
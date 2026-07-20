const asyncHandler = (requestHandler) => (req, res, next) =>
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
        next(error)
    );
    
export { asyncHandler };

// const asyncHandler = (fnc)=> async(req, res, next)=>{
//     try {
//         await fnc(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({status: false, message: err.message})
//     }
// }

// import { validationResult } from 'express-validator';

// const validationHanddler = (req,res, next) =>{
//     const errors = validationResult(req);
//     if (!errors.isEmpty){
//         const formateError = errors.array().map(error =>({
//             value:error.value,
//             field:error.path,
//             msg:error.msg
//         }));
//         res.ststus(200).json({errors:formateError})
//     }
//     next();
// }
// export default validationHanddler;



import { validationResult } from "express-validator";

const validationHanddler = (req,res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty){
        const formateError = errors.array().map(error =>({
            value:error.value,
            field:error.path,
            msg:error.msg
        }))
        res.status(200).json({errors:formateError})
    }
    next();
}
export default validationHanddler;
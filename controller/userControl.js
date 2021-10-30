const helpers = require('../helpers/signUp')
module.exports={
    userSignup:(req,res)=>{
      helpers.userSignup(req.body).then((signUpData)=>{
         res.status(200).json({userId:signUpData.userId,token:signUpData.token,userName:signUpData.userName}) // pass jwt token and user Id to client
     }).catch(()=>{
     })
    },
    existEmail:(req,res)=>{
     helpers.emailExist(req.body.email).then((response)=>{
        res.status(200).json(response)
     }).catch((response)=>{
         res.status(500).json(response)
     })
    },
    existPhone:(req,res)=>{
        helpers.phoneExist(req.body.phone).then((response)=>{
           res.status(200).json(response)
        }).catch((response)=>{
            res.status(500).json(response)
        })
       }
}
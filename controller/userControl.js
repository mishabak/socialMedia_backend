const sign = require('../helpers/sign')
const post = require('../helpers/post')
module.exports = {
    // for sign-up
    userSignup: (req, res) => {
        sign.userSignup(req.body).then((signUpData) => {
            res.status(200).json({ userId: signUpData.userId, token: signUpData.token, userName: signUpData.userName }) // pass jwt token and user Id to client
        }).catch(() => {
        })
    },
    existEmail: (req, res) => {
        sign.emailExist(req.body.email).then((response) => {
            res.status(200).json(response)
        }).catch((response) => {
            res.status(500).json(response)
        })
    },
    existPhone: (req, res) => {
        sign.phoneExist(req.body.phone).then((response) => {
            res.status(200).json(response)
        }).catch((response) => {
            res.status(500).json(response)
        })
    },
    // for login
    userLogin: (req, res) => {
        sign.userLogin(req.body).then((response) => {
            res.status(200).json(response)  
        }).catch((response) => {
            res.status(200).json(response)
        })
    },
    // for video/image/text post
    userPost:(req,res)=>{
        post.createNewPost(req.body).then((response)=>{
            res.status(200).json(true)
        }).catch((response)=>{
            res.status(500).json(false)
        })
    },
    fetchUserPost:(req,res)=>{
        post.fetchPost().then((response)=>{
            res.status(200).json(response)
        }).catch(()=>{
            res.status(500).json(true)
        })
    }
}
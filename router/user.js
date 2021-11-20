const userControl = require('../controller/userControl');
const router = require('express').Router();
// for sign up
router.post('/sign-up',userControl.userSignup)
router.post('/exist-email',userControl.existEmail)
router.post('/exist-phone',userControl.existPhone)
// for login
router.post('/login',userControl.userLogin)
// for user video/image/text post
router.post('/post',userControl.userPost)
router.get('/fetch-post',userControl.fetchUserPost)

module.exports= router;
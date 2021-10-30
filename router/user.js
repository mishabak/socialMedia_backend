const userControl = require('../controller/userControl');
const router = require('express').Router();

router.post('/sign-up',userControl.userSignup)
router.post('/exist-email',userControl.existEmail)
router.post('/exist-phone',userControl.existPhone)

module.exports= router;
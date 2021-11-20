const db = require('../config/connection/mongoConnect')
const userCollection = require('../config/collection/collection')
const reducer = require('../reducer/userSignupReducer')
const jwtHelper = require('../jwtHelper/jwtControl')

module.exports = {
    // for user sign-up
    userSignup: (data) => {
        return new Promise(async (resolve, rejects) => {
            var userDetail = null;
            var details = await reducer.signUpDetails(data)
            var response = await db.get().collection(userCollection.USER_COLLECTION).insertOne(details)
            response ? userDetail = await db.get().collection(userCollection.USER_COLLECTION).findOne({ _id: response.insertedId }) : null;
            var currentDetails = await reducer.jwtSignUp(userDetail)
            var currentData = await jwtHelper.SignUp(currentDetails)  // for create an jwt
            var resolveDataJwt = await reducer.resolveDataJwt(currentData,currentDetails.userId,currentDetails.userName)
            currentData ? resolve(resolveDataJwt) : rejects()
        })
    },
    emailExist: (data) => {
        return new Promise(async (resolve, rejects) => {
            var response = await db.get().collection(userCollection.USER_COLLECTION).findOne({ email: data })
            if (response) {
                resolve({ status: true })
            } else {
                rejects({ status: false })
            }
        })
    },
    phoneExist: (data) => {
        return new Promise(async (resolve, reject) => {
            var response = await db.get().collection(userCollection.USER_COLLECTION).findOne({ phone: data })
            if (response) {
                resolve({ status: true })
            } else {
                reject({ status: false })
            }
        })
    },
    // for user login
    userLogin:(data)=>{
        return new Promise(async(resolve,reject)=>{
            var fetchData = await db.get().collection(userCollection.USER_COLLECTION).findOne({userName:data.userName})
            if(fetchData){
                console.log(fetchData.password,data.password);
                if(fetchData.password==data.password){
                    let currentData = await reducer.jwtLogin(fetchData) // password include user full details
                   var jwt = await jwtHelper.Login(currentData)
                   var resolveData = await reducer.loginReducer(jwt,currentData.userId,currentData.userName)
                    resolve(resolveData)
                }else{
                    reject({passwordError:false})
                }
            }else{
                reject({userNameError:false})
            }


        })

    }
}
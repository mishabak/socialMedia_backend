const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.JSON_WEB_TOKEN
const maxAge = 1000 * 60 * 60 * 24 * 7
module.exports = {
    SignUp: async (data) => {
        const token = await jwt.sign({ data }, SECRET_KEY, { expiresIn: maxAge })
        return token;
    },
    Login: async(data)=>{
        const token = await jwt.sign({data},SECRET_KEY,{expiresIn:maxAge})
        return token;
    }

}
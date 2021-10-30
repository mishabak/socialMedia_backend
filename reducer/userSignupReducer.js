module.exports = {
    signUpDetails: (data) => {
        let details = {};
        details.firstName = data.firstName;
        details.lastName = data.lastName;
        details.email = data.email;
        details.phone = `+91${data.phone}`;
        details.password = data.password;
        details.birthDate = `${data.day}/${data.month}/${data.year}`;
        var email = data.email.split('@');
        details.userName = email[0]; 
        return details;
    },
    jwtSignUp:(data)=>{
        let details = {};
        details.userId = data._id;
        details.userName = data.userName;
        return details;
    },
    resolveDataJwt:(token,userId,userName)=>{
        var data = {}
        data.token = token
        data.userId = userId
        data.userName = userName
        return data;
    }
}
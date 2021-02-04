const Auth = require('../controllers/authController')
const api_version = '/api/v1'

module.exports = async app => {

    app.post(`${api_version}/signup`, Auth.signup)
    app.post(`${api_version}/login`, Auth.login)
    app.post(`${api_version}/verify`, Auth.verify2FA)
   

}


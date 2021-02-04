const speakeasy = require('speakeasy')
const qrcode = require('qrcode')
let data = {
    secret: '',
    qr: ''
}

exports.generateSecret = () => {
    return new Promise((resolve, reject) => {
    var secret =  speakeasy.generateSecret({
        name: 'SSO Decenternet'
    })
    
    qrcode.toDataURL(secret.otpauth_url, function(err, qr){
        data.secret = secret.ascii
        data.qr = qr
        
        resolve(data)
    })
})
    
}

exports.verify = (token, secret) => {
    return new Promise((resolve, reject) => {

        var verified = speakeasy.totp.verify({
            secret: secret,
            encodin: 'ascii',
            token: token
        })
        resolve(verified)
})
    
}


  





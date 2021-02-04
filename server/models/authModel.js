
const User = require('../DBSchema/User.js')
const TWOFA = require('../utils/2fa')


exports.signup = async (name, email, password, result) => {  
    const generatedQr = await TWOFA.generateSecret()
  const data = new User ({
    name: name,
    email: email,
    password: password,
    secret: generatedQr.secret
  })

  data.save(function (err, res) {
    if(err){
      return result(null, err)
    }
    const response = {
        qr: generatedQr.qr,
        res
    }
    result(null, response)
  })

    
}

exports.login = (email, password ,result) => { 
  
    User.findOne(({email: email, password: password}), function (err, res){
      if(err){
        return result(null, err)
      }
      
      result(null, res)
    })
       
}

exports.verify2FA = (id, token, result) => { 
  
    User.findOne(({_id: id}), async function (err, res){
      if(err){
        return result(null, err)
      }
      const verified = await TWOFA.verify(token, res.secret)
      
      result(null, verified)
    })
       
}

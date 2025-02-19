const axios = require('axios').default
const https = require("https")

module.exports = async function sendSMS(tel, contenu) {
    try {
        if(!tel) return false
        const httpsAgent = new https.Agent({  
                  rejectUnauthorized: false
        });
        const response = await axios.post('https://prodev.mediabox.bi:22629/sms', {
                  phone: tel,
                  txt_message: contenu,
        }, {  })
    } catch (error) {
        console.log(error)
    }
}
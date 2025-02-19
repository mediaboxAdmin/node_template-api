const express = require('express')


const auth_controller = require('../../controllers/admin/auth_admin.controller')    
const requireAuth = require('../../middlewares/requireAuth')

const authRouter = express.Router()

authRouter.post('/login', auth_controller.login)
authRouter.post('/checkemail',auth_controller.getInfoByEmail)
authRouter.delete('/logout', auth_controller.logout)
authRouter.post('/access_token', auth_controller.getNewAccessToken)
authRouter.get('/find_roles/:ID_PROFIL',auth_controller.findRolesByProfil)
authRouter.get('/connected_user_infos',requireAuth, auth_controller.findUserInfo)
authRouter.post("/checkOTP", auth_controller.checkOTP)
authRouter.put("/changePwd",auth_controller.changePWD)

module.exports = authRouter
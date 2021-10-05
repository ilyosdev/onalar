const express = require('express')
const router = express.Router()

const { checkJwt } = require('../utils/middlewares')

const AuthC = require('../controllers/AuthC')
const PostsC = require('../controllers/PostsC')
const UsersC = require('../controllers/UsersC')

// auth route
router.post('/auth/login', AuthC.login)
router.post('/auth/verify', AuthC.verify)

// users route
router.post('/users/setfirstname', checkJwt, UsersC.setFirstname)
router.post('/users/setlastname', checkJwt, UsersC.setLastname)
router.post('/users/setcountry', checkJwt, UsersC.setCountry)
router.post('/users/setregion', checkJwt, UsersC.setRegion)
router.post('/users/activate-expert', checkJwt, UsersC.activateExpert)
router.post('/users/deactivate-expert', checkJwt, UsersC.deactivateExpert)

// posts route
router.get('/posts/userfeed', PostsC.getUserFeed)
router.post('/posts/create', PostsC.createPost)
router.post('/posts/update-userfeed', PostsC.UpdateUserFeed)

// meta
// router.get('/meta/topics', PostsC.getUserFeed)
// router.get('/posts/', PostsC.getUserFeed)

module.exports = router

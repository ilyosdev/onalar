const express = require('express');
const router = express.Router();

const { checkJwt } = require('../utils/middlewares');

const AuthC = require('../controllers/AuthC');
const PostsC = require('../controllers/PostsC');
const UsersC = require('../controllers/UsersC');

// auth route
router.post('/auth/register', AuthC.register);
router.post('/auth/login', AuthC.login);


// users route
router.get('/users/', checkJwt, UsersC.getAllStuff);
router.post('/users/', checkJwt, UsersC.createThing);
router.get('/users/:id', checkJwt, UsersC.getOneThing);
router.put('/users/:id', checkJwt, UsersC.modifyThing);
router.delete('/users/:id', checkJwt, UsersC.deleteThing);


// posts route
router.get('/posts/', PostsC.getAll);

module.exports = router;
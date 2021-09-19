const express = require('express');
const router = express.Router();

const { checkJwt } = require('../utils/middlewares');

const AuthC = require('../controllers/AuthC');
const PostsC = require('../controllers/PostsC');
const UsersC = require('../controllers/UsersC');

// auth route
router.post('/api/auth/register', AuthC.register);
router.post('/api/auth/login', AuthC.login);


// users route
router.get('/api/users/', checkJwt, UsersC.getAllStuff);
router.post('/api/users/', checkJwt, UsersC.createThing);
router.get('/api/users/:id', checkJwt, UsersC.getOneThing);
router.put('/api/users/:id', checkJwt, UsersC.modifyThing);
router.delete('/api/users/:id', checkJwt, UsersC.deleteThing);


// posts route
router.get('/api/posts/', PostsC.getAll);

module.exports = router;
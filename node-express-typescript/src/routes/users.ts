import {Router} from 'express';

const users = Router();

/* GET users listing. */
users.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default users;

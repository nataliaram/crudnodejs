var express = require('express');
var router = express.Router();

var user = require('../controllers/userController.js');

router.get('/', user.list);
router.get('/show/:id', user.show);
router.get('/create', user.create);
router.post('/save', user.save);
router.get('/edit/:id', user.edit);
router.post('/update/:id', user.update);
router.post('/delete/:id', user.delete);

module.exports = router;

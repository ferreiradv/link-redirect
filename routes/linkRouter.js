const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController')

router.get('/:title',linkController.redirect);

router.post('/',express.urlencoded(),linkController.addLink)

router.get('/',(req,res)=>{
    res.send('Hello world!');
});

module.exports = router;
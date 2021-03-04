const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController')


router.get('/',linkController.allLinks);
router.get('/:title',linkController.redirect);
router.get('/add',(req,res)=>{res.render('add',{error:false,body:{}})});
router.get('/edit/:id',linkController.loadLink)

router.post('/edit/:id',express.urlencoded({extended: true}),linkController.editLink)
router.post('/',express.urlencoded({extended: true}),linkController.addLink);


router.delete('/:id',linkController.deleteLink);

module.exports = router;
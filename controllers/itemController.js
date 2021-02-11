const express = require('express');
const router = express.Router();

const Item = require('../models').Item;

//index
router.get('/', (req, res) => {
    Item.findAll().then((item) => {
      res.render('index.ejs', {item})
    });
  });

//new
router.get('/new',(req,res)=>{
    res.render('new.ejs')
})

//post for new
router.post('/',(req,res)=>{
    Item.create(req.body).then((newItem)=>{
    res.redirect('/item');
    });
});



module.exports=router;
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

//edit
router.get('/:id/edit', (req,res)=>{
  Item.findByPk(req.params.id).then((item)=>{
      res.render('edit.ejs',{item});
  })
});

//put for edit (update)
router.put('/:id', (req,res) => {
  Item.update(req.body, {
      where: {id: req.params.id},
      returning: true,
  }).then((item)=>{
      res.redirect('/item');
  });
});

//delete
router.delete('/:id', (req, res) => {
	Item.destroy({where: {id: req.params.id} }).then(()=>{
        res.redirect('/item');
    });
});

module.exports=router;
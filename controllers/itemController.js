const express = require('express');
const router = express.Router();

const Item = require('../models').Item;
const Selection = require('../models').Selection;

//index
router.get('/', (req, res) => {
    Item.findAll().then((item) => {
      Selection.findAll().then((selection)=>{
        res.render('index.ejs', {item, selection})
    })
  })
})

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

//post to add item to selection
router.post('/:itemId/add',(req,res)=>{
  Selection.findOne({
    where: {
      itemId: req.params.itemId
    }
  }).then((selection)=>{
    if (selection === null){
      Selection.create({itemId:req.params.itemId,quantity:1}).then(()=>{
        })
    } else {
      selection.quantity += 1;
      selection.save();
    }
    res.redirect('/item');
  })
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

//delete from items
router.delete('/:id', (req, res) => {
	Item.destroy({where: {id: req.params.id} }).then(()=>{
        res.redirect('/item');
    });
});

//delete from items
router.delete('/selection/:id', (req, res) => {
	Selection.destroy({where: {id: req.params.id} }).then(()=>{
        res.redirect('/item');
    });
});

module.exports=router;
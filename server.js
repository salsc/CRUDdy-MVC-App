const express = require('express');
const app = express();
const methodOverride = require('method-override');


/////middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:true}));

app.use('/item', require('./controllers/itemController.js'));





/////routes
app.get('/',(req,res)=>{
    res.redirect('/catalog')
})

app.listen(3002,()=>{
    console.log("Your order?")
})
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');


/////middleware
app.use(express.static("public"));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/item', require('./controllers/itemController.js'));

/////routes
// app.get('/',(req,res)=>{
//     res.redirect('/item')
// })

app.listen(process.env.PORT,()=>{
    console.log("Your order?")
})
const express = require('express')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express()
app.use(morgan('combined'))
    //template engine
app.engine('hbs', handlebars.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));
console.log("path", path.join(__dirname, "resources/views"))
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => console.log("Succesfully"));
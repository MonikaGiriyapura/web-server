const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const PORT = process.env.PORT || 3000;

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

//Paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

//setup handlebars
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render("index", { title: 'Weather app', name: "Monika Giriyapura" })
})

app.get('/about', (req, res) => {
    res.render("about", { title: 'About Page', name: "Monika Giriyapura" })
})

app.get('/help', (req, res) => {
    res.render("about", { title: 'Help Page', name: "Monika Giriyapura" })
})

app.get('/weather', (req, res) => {
    res.send("<h1>Weather</h1>");
})

app.get('/help/*',(req,res)=>{
    res.render("404",{
        name: "Monika Giriyapura",
        error_message: 'Help article not found',
        title: '404'
    })
})

//Error
app.get('*',(req,res) => {
    res.render('404',{
        error_message: 'Page not Found',
        title: '404',
        name: 'Monika Giriyapura'
    });
})

app.listen(PORT, () => {
    console.log("Server is up on the port "+PORT);
})
const express = require('express');
const pug = require('pug');
const path = require('path');

const books = [];

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', "pug");
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('main', {books})
});

app.post('/add', (req, res) => {
    books.push({
        book: {
            title: req.body.title,
            author: req.body.author,
            coverURL: req.body.coverURL
        },
        ID: Date.now(),
        checked: false
    });
    res.redirect('/');
});

app.post('/toggle', (req, res) => {
    let checked = (req.body.state == "on")? 'checked' : '';
    let i;
    for(i = 0; i < books.length; i++){
        if(books[i].ID == req.body.id)
            break
    }
    books[i].checked = !books[i].checked;

    res.redirect('/');
});
























app.listen(3000, () => {
    console.log('Listening on port 3000');
})
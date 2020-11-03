const express = require('express');
const router = express.Router();
const Articles = require('./models/articles');

//REQUEST GET ALL ARTICLES
router.get('/', (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST ADD NEW ARTICLE 
bodyParser = require('body-parser').json();
router.post('/add', function (req, res) {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });

    newArticle
    .save()
    .then(() => res.json("El nuevo articulo se ingreso exitosamente!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


//find by id
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
    });

//REQUEST FIND ARTICLE BY ID AND UPDATE 
router.put('/update/:id', function(req, res) {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title,
        article.article = req.body.article,
        article.authorname = req.body.authorname

        article
        .save() 
        .then(() => res.json("El articulo se actualizo exitosamente!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
})

//DELETE article
router.delete('/:id', function(req, res) {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("El articulo se borro"))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

module.exports = router;

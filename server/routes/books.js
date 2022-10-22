// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

  res.json(req.book);

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {


  req.book.title = req.body.title;
  req.book.author = req.body.author;
  req.book.genre = req.body.genre;
  req.book.description = req.body.description;
  req.book.price = req.body.price;

  req.book.save(function (err) {
   if (err)
    res.status(500).send(err);
   else
    res.render(req.book);
  });
 })

  req.book.save(function (err) {
   if (err)
    res.status(500).send(err);
   else
    res.render(req.book);
  })

    /*****************
     * ADD CODE HERE *
     *****************/


// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

  req.book.title = req.body.title;
  req.book.author = req.body.author;
  req.book.genre = req.body.genre;
  req.book.description = req.body.description;
  req.book.price = req.body.price;
  if (req.body.id){

  }
    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  req.book.title = req.body.title;
  req.book.author = req.body.author;
  req.book.genre = req.body.genre;
  req.book.description = req.body.description;
  req.book.price = req.body.price;
  req.book.remove(function (err) {
    req.book.remove((err) => {
        if (err) {
          return res.send(err);
        }
       else{

        console.log ('record has been already deleted');
       }

      });
       


  
    /*****************
     * ADD CODE HERE *
     *****************/
      });
    });

  

module.exports = router

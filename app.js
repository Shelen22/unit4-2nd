 const { application } = require('express');
const express = require('express');
 const books = require('./books-data.json');

 const app = express();

 app.use(express.json());

app.get('/',(req, res) => {
    res.send({books});
});

app.post('/books',(req, res) => {
    const newbook = [...books,req.body];

    res.send(newbook);
});
app.get('/books/:id',(req, res) => {
     const singledata = books.filter((user) =>{ 
         if(user.id == req.params.id){
             return user;
         }

     });

     res.send(singledata)
})

app.patch('/books/:id', (req, res) =>{
   const update = books.map(book =>{
       if(book.id == req.params.id){
           if(req?.body?.author)book.author = req.body.author;
           if(req?.body?.published_year)book.published_year = req.body.published_year;
       }
       return book;
   })
      res.send(update);
   
})

 app.delete('/books/:id',(req, res) =>{
    const erase = books.filter(book =>{
        if(book.id != req.params.id){
            return book;
        }
    })
   res.send(erase);

 })
app.listen(2224,() =>{
    console.log('listening on port 2224');
})
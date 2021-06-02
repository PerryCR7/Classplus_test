const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
// const port =  3000 
const hbs = require('hbs')


// Define paths for Express config
const PublicDirectoryPath = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname, './views')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(PublicDirectoryPath))


 var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "4ff1419d43a0cdb6b56cec1f617cb917",
      secret: "4351c28b77469d16"
    };

app.get('', (req, res) => {
   res.render('index')
})
app.get('/index', (req, res) => {
   res.render('index')
})

app.get('/get_random_pic', async(req, res) => {
   const { search } = req.query
   var datalist=[]
  await Flickr.tokenOnly(flickrOptions, function(error, flickr) {
      // we can now use "flickr" as our API object,
      flickr.photos.search({
       text: search
     }, function(err, result) {
       if(err) { throw new Error(err); }
       // do something with result
      
        for( var keys in result['photos']['photo']){
            datalist.push(result['photos']['photo'][keys])
        }
      //  console.log(datalist.length)
       return res.send({
         datalist
      })
     });
    });
  
})

app.get('*', (req, res) => {
   res.render('index')
})
 app.listen(PORT, () => {
     console.log('Server is up on port!' + PORT)
 })
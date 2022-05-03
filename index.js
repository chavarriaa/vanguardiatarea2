let express = require('express');
let path = require('path');
let app = express();


app.use('/public', express.static(path.join(__dirname,'public')))
app.use('/html', express.static(path.join(__dirname, 'public','html')))
app.use('/images', express.static(path.join(__dirname, 'public','images')))
app.use('/files', express.static(path.join(__dirname, 'files')))
app.use('/bootstrap',express.static(path.join(__dirname,'node_modules','bootstrap','dist')))

app.use('/',require('./routes/canciones'))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{ root: './public/html' })
})
app.get('/acerca',(req,res)=>{
    res.sendFile('about.html',{ root: './public/html' })
})

app.listen(3001,(req,res)=>{
    console.log(`Server started at port 3001`)
})


app.use(function(req, res, next) {
    res.status(404).sendFile('404.html',{ root: './public/html' })
  });

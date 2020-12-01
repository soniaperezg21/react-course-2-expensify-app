const path = require('path');
const express = require('express');
const app = express();  
const publicPath =  path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;  //Si no existe usa el 3000

//decir donde viven los archivos  Public folder, index.html
app.use(express.static(publicPath));

//Para que lo regrese a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


//start server
app.listen(port, () => {
    console.log('Server is up!');
});

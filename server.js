const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/scripts',express.static(`${__dirname}/node_modules/`));
app.use((req,res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(PORT,() => {
    console.info('Server is listening to port:'+ PORT)
})
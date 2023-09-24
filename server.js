const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let on = document.getElementById('on');

document.addEventListener('DOMContentLoaded',()=>{
app.use(cors());


app.get('/', (req, res) => {
    const data = {
        message: 'Hello, world!',
        name: 'Hitesh',
        class: 25,
    };
    res.json(data);
});

app.listen(port, () => {

    on.innerHTML = `Server is running on port http://localhost:${port}`;
    // console.log(`Server is running on port http://localhost:${port}`);
});
});
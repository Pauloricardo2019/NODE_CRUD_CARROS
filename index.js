const express = require('express');
const res = require('express/lib/response');
const app = express();

app.use(express.json());


const carros = ["gol","Uno","Fox","Corsa"]


app.get('/carros', (req , res) => {
    return res.status(200).send(JSON.stringify(carros));
});

app.get('/carros/:id', (req , res) => {
    const {id} = req.params

    return res.status(200).send(JSON.stringify(carros[id]))

})


app.post('/carros', (req , res) => {

    const {novoCarro} = req.body;

    carros.push(novoCarro);

    return res.status(200).send(JSON.stringify(carros));

});
app.put('/carros/:id', (req , res) => {

    const {id} = req.params

    const {novoCarro} = req.body

    carros[id] = novoCarro

    return res.status(200).send(JSON.stringify(carros));

});
app.delete('/carros/:id', (req , res) => {
    const {id} = req.params;

    carros.splice(id , 1);
    return res.status(200).send(JSON.stringify('Deletado com sucesso'))
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('running'))
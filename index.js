const express = require('express');
const bp = require('body-parser');
const app = express();
const editJsonFile = require("edit-json-file");
const jsonF = editJsonFile('data.json',{
    autosave: true
});
app.use(bp.json());
app.use(bp.urlencoded({
    extended:true
}));
app.get('/',(req,res) => {
    res.send('This App is running');
})

app.put('/api/update',(req,res) => {
    let nama = req.body.nama;
    let umur = req.body.umur;
    jsonF.set('data.nama',nama);
    jsonF.set('data.umur',umur);
    res.send('Update Success!');
});
app.listen(8020);
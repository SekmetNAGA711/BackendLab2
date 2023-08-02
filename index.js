const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());



const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller');

//....EndPoints................
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
// app.put('/api/houses/:id', updateHouse)
app.delete('/api/movies/:id',deleteHouse)

app.listen(4004,()=> console.log('Having a party on port 4004'))
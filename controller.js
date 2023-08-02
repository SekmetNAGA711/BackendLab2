const houses = require('./db.json')
let globalID = 3

module.exports = {
    getHouses: (req, res) =>{
        res.status(200).send(houses)
    }
},

createHouse: (req, res) => {
    const {address, price, imageURL} = req.body;

    let newHouse = {
        id: globalID,
        address: address,
        price: +price,
        imageURL
    }
    houses.push(newHouse);
    globalID++
    res.status(200).send(houses)
},

updateHouse: (req, res) => {
    let { id } = req.params
    let { type } = req.body
    let index = houses.findIndex(elem => +elem.id === +id)

    if (houses[index].price <= 10000 && type === 'minus') {
        houses[index].price = 0
        res.status(200).send(houses)
    } else if (type === 'plus') {
        houses[index].price += 10000
        res.status(200).send(houses)
    } else if (type === 'minus') {
        houses[index].price -= 10000
        res.status(200).send(houses)
    } else {
        res.sendStatus(400)
    }
}


deleteHouse: (req, res) => {
    let index = houses.findIndex(elem => elem.id === +req.param.id); houses.splice(index, 1);
    res.status(200).send(houses);
},







const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;
const fetch = require('node-fetch');

module.exports = {
    async fetchAllUsers(req, res) {
        try {
            console.log('asdad')
            const usersPromise = await fetch('https://607a90abbd56a60017ba2c5e.mockapi.io/Customer');
            const users = await usersPromise.json();
            return res.status(200).send(users);
        }
        catch(e) {
            console.log(e)
            return res.status(500).send(e);
        }
    },
    async listSpecificUser(req, res) {  
        try {
            const userId = req.params.customerId;
            const customerPromise = await fetch(`https://607a90abbd56a60017ba2c5e.mockapi.io/Customer/${userId}`);
            const customerData = await customerPromise.json();
            return res.status(200).send(customerData);
        }
        catch(e) {
            return res.status(500).send(e);
        }
    }
};
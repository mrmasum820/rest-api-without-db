const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        name: 'MR Masum',
        email: 'mrmasum@gmail.com'
    },
    {
        id: uuidv4(),
        name: 'MH Shawan',
        email: 'mhshawan@gmail.com'
    }
]

module.exports = users;
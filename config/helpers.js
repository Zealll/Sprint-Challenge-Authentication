const db = require('../database/dbConfig.js')

module.exports = {
    insert,
    findBy
}


function insert(user) {
    return db('users')
    .insert(user)
    .then(ids => ids[0])
}


function findBy(credentials) {
    return db('users').where(credentials)
}
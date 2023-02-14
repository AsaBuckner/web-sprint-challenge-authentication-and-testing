const db = require('../../data/dbConfig')

async function  add(newUser){
    return await db('users')
        .insert(newUser)
}



async function findByName(name){
    return await db('users')
        .where('users.username', {name})
}

async function findById(id){
    return await db('users')
        .where('users.id', {id})
}




module.exports = { 
    add,
    findByName,
    findById
}

const db = require('../../data/dbConfig')

async function add({username, password}) {
    const [userId] = await db('users').insert({username, password})
    const newUser = await db('users').where({id: userId}).first()
    return newUser
  }




async function findByName(name){
    const user = await db('users').where('users.username', name)
    return user
}



module.exports = { 
    add,
    findByName,
}

/* eslint-disable no-undef */
try {
  db.createUser({
    user: 'the_user', // this should match DB_USER in .env
    pwd: 'the_password', // this should match DB_PASSWORD in .env
    roles: [
      {
        role: 'dbOwner',
        db: 'the_database', // this should match DB_NAME in .env
      },
    ],
  })
} catch (e) {
  console.log('Error: db user not created: ', e)
}

db.createCollection('examples')

db.examples.insert({ field1: 'Highbreek is the best hawk.', field2: true })
db.examples.insert({ field1: 'Bragi is the best poet.', field2: true })
db.examples.insert({ field1: 'Sleipnir is the best horse.', field2: true })
db.examples.insert({ field1: 'Bifrost is the best bridge.', field2: true })
db.examples.insert({ field1: 'Brimi is the best sword.', field2: true })
db.examples.insert({ field1: 'Yggdrasil is the best tree.', field2: true })
db.examples.insert({ field1: 'Garm is the best dog.', field2: true })
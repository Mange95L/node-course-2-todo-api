//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');


    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        Completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert Todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    // Insert new doc into users collections (name, age, location)




   /*  db.collection('Users').insertOne({
        name: 'Magnus',
        age: 22,
        location: 'Sweden'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert Todo', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    }); */


    


    db.close();
});
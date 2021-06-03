const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://samon:iFAnQVZjbzfwC7B5@cluster0-n1dim.mongodb.net/shop?retryWrites=true&w=majority'
    )
      .then(client => {
        console.log('Connected!')
        _db = client.db();
        callback();
      })
      .catch(err => console.log(err));
};

const getDb = () => {
    if (_db) 
    {
       return _db;
    } 
    throw 'Database not found!';
};

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;
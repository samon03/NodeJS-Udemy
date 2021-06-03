const mongodb = require('mongodb');

const getDb = require('../util/database').getDb;

class Product
{
    constructor(title, price, description, imageUrl, id, userId)
    {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.userId = userId;
    }

    save()
    {
       const db = getDb();
       let dbObj;
       if (!this._id) 
       {
          dbObj =  db.collection('products').insertOne(this);
       } 
       else 
       {
          dbObj =  db.collection('products').updateOne({_id: this._id}, {$set: this});
       }
       return dbObj
       .then(result => {
          console.log(result);
       })
       .catch(err => {
        console.log(err);
     });
    }

    static fetchAll()
    {
        const db = getDb();
        return db.collection('products')
        .find()
        .toArray()
        .then(products => {
            console.log(products);
            return products;
         })
        .catch(err => {
            console.log(err);
        });
    }

    static findById(prodId)
    {
        const db = getDb();
        return db.collection('products')
        .find({_id: new mongodb.ObjectId(prodId)})
        .next()
        .then(products => {
            console.log(products);
            return products;
         })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(prodId)
    {
        const db = getDb();
        return db.collection('products')
        .deleteOne({_id: new mongodb.ObjectId(prodId)})
        .then(() => {
            console.log('Deleted Product');
         })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Product;
const fs = require('fs');

const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = callFunc => {
    fs.readFile(p, (err, fileContent) => {
        if(err)
        {
           return callFunc([]); 
        }
        callFunc(JSON.parse(fileContent));
    });
};

module.exports = class Product{

    constructor(title, imageURL, price, description)
    {
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

    save()
    {
        getProductsFromFile(products => {         
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });  
    }

    static fetchAll(callFunc)
    {
        getProductsFromFile(callFunc);
    }
}
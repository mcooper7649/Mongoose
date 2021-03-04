const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/peopleDB", { useNewUrlParser: true, useUnifiedTopology: true });   //make sure your connnection to the correct DB

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema)  

const Person = mongoose.model("Person", personSchema)  


const fruit = new Fruit({  
  name: "Apple",
  rating: "7",
  review: "Pretty Solid as a fruit."
})

const person = new Person({  
  name: "John",
  age: 37
})

// fruit.save()
person.save()




  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruitDB');
    // Find some documents
    collection.find({}).toArray(function(err, fruit) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruit)
      callback(fruit);
    });
  }

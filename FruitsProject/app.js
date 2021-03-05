const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });   //make sure your connnection to the correct DB

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema)  

const Person = mongoose.model("Person", personSchema)  


const fruit = new Fruit({  
  name: "Peach",
  rating: "5",
  review: "Peaches are yummy."
})

// const grapes = new Fruit({  
//   name: "Grapes",
//   rating: "9",
//   review: "I love Wine."
// })

// const watermelon = new Fruit({  
//   name: "Watermelon",
//   rating: "3",
//   review: "Quenches your thirst."
// })

// const person = new Person({  
//   name: "John",
//   age: 37
// })


// apple.save()
// grapes.save()
// watermelon.save()

// fruit.save()
// person.save()


// Fruit.updateOne({_id: "60411ea8cf6ccf28621e8612"},{name: "Banana"}, function(err){
//   if (err){
//       console.log(err)
//   } else {
//       console.log("Sucessfully Updated!")
//   }
// })

Fruit.deleteOne({ _id: '6042726542c4f835d03d0941' }, function (err) {
  if (err){
    return handleError(err, "Unsuccessful Deletion");
  } else {
    console.log("Successfully Deleted")
  }
  // deleted at most one tank document
});


Fruit.find(function(err, fruits){
  if(err){
      console.log(err);
  }else{

      mongoose.connection.close();

      fruits.forEach(fruit => {
        console.log(fruit.name)
      });
  }
})   





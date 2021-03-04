## Mongoose
---

[Mongoose-Docs](https://mongoosejs.com/)

- Mongoose is a popular framework to the native mongoDB driver

- Mongoose is a ODM or Object Document Mapper
    - This allows for it to interactation between node.js and mongodb databases

- This makes your code much shorter and easier to work with.

- Our example below replaces all that boilerplate content from the native driver and reduces it significantly

```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

- The only major difference in this code is that we add the new model method.
    - Then we call it when we delcare the kitty

- Then we save the model tot he DB and log "Meow"


### Prep our databases
---

1. Before we get started lets remove our previous DB's and start with a clean slate.
    - Mongod from terminal in the local db directory  //  /Users/mcooper/data/db
    - mongo to start the shell // This lets use run commands
    - show dbs to show our list of databases
    - use fruitDb to switch to that DB
    - db.dropDatabase()  // This deletes the db from the server

2. Now that we have removed the DB we can begin  recreating the DB using mongoose
    - const mongoose = require('mongoose');  // Add to top of app.js
    - Install mongoose // npm i mongoose
    

3. Connectiong code is listed below // This replaces almost 20 lines of CODE!
    ```
    mongoose.connect("mongodb://localhost:27017/fruitsDB")   // This will connect or create a fruitsDB

    ```

4. Now that the connection should be good, we can try to run our app
    - node app.js from terminal

5. If you get deprecation warning (you probably will), search the warning online and add the fix
    - { useNewUrlParser: true }  // Pass to MongoClient.connect
    - { useUnifiedTopology: true } // Pass to MongoClient.constructor
    - mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });   // Final Code


### Inserting with Mongoose
---

1. We need to create a Schema or blueprint of the structure of our data

2. Create a const fruitSchema = new mongoose.Schema({})  // how to create a Schema in Mongoose
    - Here lets add all the potential key:value pairs for fruit moving forward

3. Once the Schema is complete we can use the Schema to make a mongoose Model
    - const Fruit = mongoose.model("Fruit", fruitSchema)    
    -  Two Parameters need to be specified
        - The name of the collection associated with this Schema  // Don't get it confused with the DB name with is fruitsDB
        -  The SINGULAR NAME of your collection needs to be specified.  so if your collection is fruits, you will put Fruit and it will convert it automaticaly to "fruits"; yes it will lowercasee too
        - The 2nd paramenter is the name of the schema you want to associate // fruitSchema in our example

4. Only now we can create a new fruit document   // This completely replaces all insert code from the native driver
    ```
    const fruit = new Fruit({         //creates a new fruit by seting a const and declaring new Fruit({}), we can add our key/values
        name: "Apple",
        rating: "7",
        review: "Pretty Solid as a fruit."
    })

    fruit.save()    // Saves our insert fruit to the DB

    ```

5. Run app.js again and see if our insert worked
    - control-c to end shell (if running)
    - node app.js  
    - switch to shell type show dbs (confirm fruitsDB is listed)
    - use fruitsDb to switch to that DB
    - show collections to see if we have any (should see fruits)
    
6.  Everytime you run app.js fruit.save() will run if not commented out
    - Make sure you comment it out after use or you will have multiple items in your DB!!!

## Challenge 
---

1. Create a new collection called "people"
2. Create a new Scheme for people
3. Add two values for people, "name" and "age"
4. Create a new Model of that Schema of a person
5. Create a new person, John and hes 37
6. Save  that new person to the mongoDB  
7. Show that person in the mongo Shell  //db.people.find()
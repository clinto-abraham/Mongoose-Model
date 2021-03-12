//  ESversion: 6
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true }, {useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified! in the name category of data entry"]
  },  // Data Validation
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "An apple a day, keeps a doctor away"});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "James",
  age: 37
});

 person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The Best Fruit!"
});

const orange = new Fruit({
  name: "orange",
  score: 6,
  review: "Best for juice!"
});

const banana = new Fruit({
  name: "Banana",
  score: 5,
  review: "Not tasty but useful gain of weight!"
});

Fruit.deleteOne({name: "kiwi"}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully deleted the document");
  }
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits){
  if(err) {
    console.log(err);
  } else {
    // console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({})
People.updateOne({
  _id: "601ebd72062c1b01e0101f6a"
  },
  {
    age: 28
  },
  function(err){
    if (err){
      console.log(err);
    } else {
      console.log("Successfully updated the document");
    }
});

// Fruit.find(function(err, people){
//   if(err) {
//     console.log(err);
//   } else {
//     // console.log(people);
//     mongoose.connection.close();
//     people.forEach(function(people){
//       console.log(people.name);
//     });
//   }
// });

// embedding and relationship method:
const mango = new Fruit({
  name: "Mango",
  score: 9,
  review: "Fav fruit of India"
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully related to people");
  }
});

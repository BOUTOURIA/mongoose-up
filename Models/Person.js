const mongoose=require('mongoose')
const schema=mongoose.Schema;

// define person schema
const personSchema = new schema({
    name: {
      type: String,
      require: true,
    },
    age: Number,
    favoriteFoods: [String],
  });
  
  // create person model
  module.exports=Person= mongoose.model('Person', personSchema);
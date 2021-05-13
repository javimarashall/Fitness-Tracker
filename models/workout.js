const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
},

  exercises: [{
    type: {
        type: String,
        trim: true,
        required: "Enter a type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for exercise"
    },
    duration: {
      type: Number,
      required: "Enter a duration"
    },
    weight: {
      type: Number,
      required: "Enter a weight"
    },
    reps: {
        type: Number,
        required: "Enter how many reps"
    },
    sets: {
        type: Number,
        required: "Enter how many sets"
    },
    distance

}]

  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
  
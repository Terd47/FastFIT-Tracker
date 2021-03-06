const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// fastFIT schema
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

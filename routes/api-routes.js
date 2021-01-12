const router = require("express").Router();
const Workout = require("../models/workout.js");

// // get all workouts from database
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        console.log(err);
    })
});

// // create new workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        console.log(err);
    });
});

// // get workout in 7 day range 
router.get("/api/workouts/:range", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch((err) => {
        console.log(err)
    });
});

// // create new exercise and add to workout
router.put("/api/workouts/:id", (req,res) => {
    Workout.findByIdAndUpdate(req.params.id,
    { $inc: { totalDuration: +req.body.duration }, 
      $push: {"exercises": req.body}}, { new: true })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = router;

const router = require("express").Router();
const db = require("../models");

// code route to create a new workout
router.post('/api/workouts', ({ body }. res) => {
    db.Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// code route to update an existing workout

// code route to find all workouts

// code route to find the details of the past 7 workouts

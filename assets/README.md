# Fitness-Tracker

## Summary
This software contains an application called fitness tracker. In this application the user is able to keep track of their daily workouts. When the user loads the application on the browser, the user is loads the information for the last workout. This information includes the date, total workout, exercises performed, total weight lifted, etc. On this page, the user is able to start a new workout or continue the last workout. If the user decides to start a new workout, the application then prompts the user for some information about the workout. If the user selects to continue the workout, the application then prompts the user to input some information. 

The application also contains a dashboard page where it displays charts of the workout data. The charts that are displayed are workout duration in minutes, pounds lifted, and exercises performed. The pie charts display the name of the pie charts with the reps as well.   

## Code Snippet

```javascript
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({
        _id: req.params.id
    },
        {
            $push: { exercises: req.body }
        }
    )

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
```
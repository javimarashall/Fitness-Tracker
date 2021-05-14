const router = require("express").Router();
const { Workout } = require("../models");

//-----------ROUTE WORKS-----------
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//--------------ROUTE WORKS-------------
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//--------------ROUTE WORKS-------------
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

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





//---------------------------------------------------------------------
// router.put('/api/workouts/:', (req, res) => {
//     // Calls the update method on the Book model
//     Workout.update(
//       {
//         // All the fields you can update and the data attached to the request body.
//         name: req.body.name,
//         duration: req.body.duration,
//         weight: req.body.weight,
//         reps: req.body.reps,
//         sets: req.body.sets,
//         distance: req.body.distance,
//       },
//       {
//         // Gets the books based on the isbn given in the request parameters
//         where: {
//           Workout: req.params.Workout,
//         },
//       }
//     )
//       .then((dbWorkout) => {
//         // Sends the updated book as a json response
//         res.json(dbWorkout);
//       })
//       .catch((err) => res.json(err));
//   });


//-------------------------------------------------------------------------------------
//   router.delete('/:id', withAuth, async (req, res) => {
//     try {
//       const projectData = await Project.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });

//       if (!projectData) {
//         res.status(404).json({ message: 'No project found with this id!' });
//         return;
//       }

//       res.status(200).json(projectData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


module.exports = router;


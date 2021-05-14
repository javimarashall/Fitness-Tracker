const router = require('express').Router();
const path = require('path');

//exercise route             ----------ROUTE WORKS------------
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

//index route   ----------------ROUTE WORKS--------------
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // no route is found default to index --------ROUTE WORKS-----------
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

//stats route             ----------ROUTE WORKS------------
router.get('/dashboard/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });

module.exports = router;
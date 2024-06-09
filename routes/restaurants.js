const router = require('express').Router();

// Test route
router.route('/test').get((req, res) => {
    res.json({ message: 'Restaurant route is working!' });
});

// Placeholder route for getting all restaurants
router.route('/').get((req, res) => {
    res.json({ message: 'This is where you will get all restaurants.' });
});

// Placeholder route for adding a new restaurant
router.route('/add').post((req, res) => {
    res.json({ message: 'This is where you will add a new restaurant.' });
});

// Placeholder route for getting a restaurant by ID
router.route('/:id').get((req, res) => {
    res.json({ message: `This is where you will get restaurant with ID ${req.params.id}.` });
});

// Placeholder route for updating a restaurant
router.route('/update/:id').post((req, res) => {
    res.json({ message: `This is where you will update restaurant with ID ${req.params.id}.` });
});

// Placeholder route for deleting a restaurant
router.route('/:id').delete((req, res) => {
    res.json({ message: `This is where you will delete restaurant with ID ${req.params.id}.` });
});

module.exports = router;

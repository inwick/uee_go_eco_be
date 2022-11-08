const router = require('express').Router();
let Food = require('../../models/foodSaver/foodSaver');


//insert
router.route('/add').post((req, res) => {
    
    const userId = req.body.userId;
    const title = req.body.title;
    const category = req.body.category;
    const description = req.body.description;
    const video = req.body.video;
    const image = req.body.image;
    
    const newFood = new Food({
        userId,
        title,
        category,
        description,
        video,
        image
    });
    
    newFood.save()
    .then(() => res.json('Food-Tip added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//get all
router.route('/').get((req, res) => {
    Food.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});


//get by ID
router.route('/:id').get((req, res) => {
    Food.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food-Tip deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update details
router.route('/updateFoodTip/:id').post((req, res) => {
    Food.findById(req.params.id)
        .then(Food => {

            Food.title = req.body.title;
            Food.category = req.body.category;
            Food.description = req.body.description;
            Food.video = req.body.video;
            Food.image = req.body.image;

            Food.save()
                .then(() => res.json('Food-Tip updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
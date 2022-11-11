const router = require('express').Router();
let FoodComments = require('../../models/foodSaver/foodComments');

//get all
router.route('/').get((req, res) => {
    FoodComments.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by tip id
router.route('/tip-comment/:id').get((req, res) => {
    FoodComments.find({ tipId: req.params.id })
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
})

//insert
router.route('/add').post((req, res) => {

    const tipId = req.body.tipId;
    const userId = req.body.userId;
    const comment = req.body.comment;

    const newFood = new FoodComments({
        tipId,
        userId,
        comment,
    });

    newFood.save()
        .then(() => res.json('Comment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID
router.route('/:id').get((req, res) => {
    FoodComments.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    FoodComments.findByIdAndDelete(req.params.id)
        .then(() => res.json('Comment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update details
router.route('/updateFoodTip/:id').post((req, res) => {
    FoodComments.findById(req.params.id)
        .then(fuel => {

            fuel.tipId = req.body.tipId;
            fuel.userId = req.body.userId;
            fuel.comment = req.body.comment;

            fuel.save()
                .then(() => res.json('Comment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
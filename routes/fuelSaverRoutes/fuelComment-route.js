const router = require('express').Router();
let FuelComments = require('../../models/fuelSaver/fuelComments');

//get all
router.route('/').get((req, res) => {
    FuelComments.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//insert
router.route('/add').post((req, res) => {

    const tipId = req.body.tipId;
    const userId = req.body.userId;
    const comments = req.body.comments;

    const newFuel = new FuelComments({
        tipId,
        userId,
        comments,
    });

    newFuel.save()
        .then(() => res.json('FuelComments-Tip added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID
router.route('/:id').get((req, res) => {
    FuelComments.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    FuelComments.findByIdAndDelete(req.params.id)
        .then(() => res.json('FuelComments-Tip deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update details
router.route('/updateFuelTip/:id').post((req, res) => {
    FuelComments.findById(req.params.id)
        .then(fuel => {

            fuel.tipId = req.body.tipId;
            fuel.userId = req.body.userId;
            fuel.comments = req.body.comments;

            fuel.save()
                .then(() => res.json('FuelComments-Tip updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
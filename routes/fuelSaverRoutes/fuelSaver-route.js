const router = require('express').Router();
let Fuel = require('../../models/fuelSaver/fuelSaver');

//get all
router.route('/').get((req, res) => {
    Fuel.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//insert
router.route('/add').post((req, res) => {

    const userId = req.body.userId;
    const image = req.body.image;
    const tipTitle = req.body.tipTitle;
    const tipDescription = req.body.tipDescription;

    const newFuel = new Fuel({
        userId,
        image,
        tipTitle,
        tipDescription,
    });

    newFuel.save()
        .then(() => res.json('Fuel-Tip added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID
router.route('/:id').get((req, res) => {
    Fuel.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Fuel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Fuel-Tip deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update details
router.route('/updateFuelTip/:id').post((req, res) => {
    Fuel.findById(req.params.id)
        .then(fuel => {

            fuel.userId = req.body.userId;
            fuel.image = req.body.image;
            fuel.tipTitle = req.body.tipTitle;
            fuel.tipDescription = req.body.tipDescription;

            fuel.save()
                .then(() => res.json('Fuel-Tip updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
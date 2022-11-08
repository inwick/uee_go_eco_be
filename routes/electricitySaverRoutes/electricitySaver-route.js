const router = require('express').Router();
let Electricity = require('../../models/electricitySaver/monthlyBill');

//get all
router.route('/').get((req, res) => {
    Electricity.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//insert
router.route('/add').post((req, res) => {

    const month = req.body.month;
    const units = req.body.units;

    const newElectricity = new Electricity({
        month,
        units,
    });

    newElectricity.save()
        .then(() => res.json('Monthly Bill Details Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID
router.route('/:id').get((req, res) => {
    Electricity.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Electricity.findByIdAndDelete(req.params.id)
        .then(() => res.json('Fuel-Tip deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update details
router.route('/update/:id').post((req, res) => {
    Electricity.findById(req.params.id)
        .then(electricity => {

            electricity.month = req.body.month;
            electricity.units = req.body.units;

            electricity.save()
                .then(() => res.json('Electricity Monthly Entry Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
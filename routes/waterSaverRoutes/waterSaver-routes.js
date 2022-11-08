const router = require('express').Router();
let Water = require('../../models/waterSaver/waterSaver');

//get all
router.route('/').get((req, res) => {
    Water.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//insert
router.route('/add').post((req, res) => {

    const userId = req.body.userId;
    const image = req.body.image;
    const tipTitle = req.body.tipTitle;
    const tipDescription = req.body.tipDescription;
    const tipCategory = req.body.tipCategory;

    const newWater = new Water({
        userId,
        image,
        tipTitle,
        tipDescription,
        tipCategory
    });

    newWater.save()
        .then(() => res.json('Water-Tip added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID
router.route('/:id').get((req, res) => {
    Water.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Water.findByIdAndDelete(req.params.id)
        .then(() => res.json('Water-Tip deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update details
router.route('/updateWaterTip/:id').post((req, res) => {
    Water.findById(req.params.id)
        .then(water => {

            water.userId = req.body.userId;
            water.image = req.body.image;
            water.tipTitle = req.body.tipTitle;
            water.tipDescription = req.body.tipDescription;
            water.tipCategory = req.body.tipCategory;

            water.save()
                .then(() => res.json('Water-Tip updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
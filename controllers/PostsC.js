const jwt = require('jsonwebtoken')

const User = require('../models/UserM')

exports.createThing = (req, res, next) => {
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId,
    })
    thing
        .save()
        .then(() => {
            res.status(201).json({
                message: 'Post saved successfully!',
            })
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            })
        })
}

exports.getAll = (req, res, next) => {
    Thing.findOne({
        _id: req.params.id,
    })
        .then((thing) => {
            res.status(200).json(thing)
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            })
        })
}

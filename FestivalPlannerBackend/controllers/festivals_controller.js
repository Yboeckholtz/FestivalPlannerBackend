const Festival = require('../models/festival');

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there'});
    },

    create(req, res, next) {
        const festivalProps = req.body;

        Festival.create(festivalProps)
        .then(festival => res.send(festival))
        .catch(next);

    },

    edit(req, res, next) {
        const festivalId = req.params.id;
        const festivalProps = req.body;

        festival.findByIdAndUpdate({ _id: festivalId }, festivalProps)
        .then(() => festival.findById({_id: festivalId}))
        .then(festival => res.send(festival))
        .catch(next);
    },

    delete(req, res, next) {
        const festivalId = req.params.id; 
        const festivalProps = req.body;

        festival.findByIdAndRemove({ _id: festivalId })
        .then(festival => res.status(204).send(festival))
        .catch(next);

    }
};
const assert = require('assert');
const request = require('superest');
const app = require('../../app');
const mongoose = require('mongoose');

const Festival = mongoose.model('festival');

describre('Festivals controller', () => {
    it('Post to /api/festivals creates a new festival', done => {
        Festival.count().then(count => {
            request(app)
            .post('/api/festivals')
            .send({ name: 'Ufo Breda'})
            .end(() => {
                Festival.count().then(newCount => {
                    assert(count + 1 === newCount);
                    done();
                });
        });
        });
    });

    // it('PUT to /api/festivals/id edits an existing festival', done => {
    //     const festival = new Festival({ name: 'Rotterdamse Rave'});

    //     festival.save().then(() => {
    //     request(app)
    //     .put(`/api/festivals/' + ${festivals._id}`)                ////.put('/api/festivals/' + festivals.id)
    //     .send({ driving: true})
    //     .end(() => {
    //         Festival.findOne({name: 'Rotterdamse Rav'})
    //         .then(festival => {
    //             assert(festival.driving === true);
    //             done();
    //         });
    //     });
    //     });
    // });

    it('DELETE to api/festivals/id can delete a festival', done => {
        const festival = new Festival({ name: 'Ufo Breda'});

        festival.save().then(() => {
            request(app)
            .delete(`/api/festivals/${festival._id}`)
            .end(() => {
                Festival.findOne({ email: 'Ufo Breda'})
                .then((festival) => {
                    assert(festival === null);
                });
            });
        });
    });
});
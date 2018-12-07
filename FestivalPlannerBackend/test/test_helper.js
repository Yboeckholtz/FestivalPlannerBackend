const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/festivalplanner_test');
    mongoose.connection
    .once('open', () => done())
    .on('error', error => {
        console.warn('warning', error);
    });
});

beforeEach(done => {
    const { festivals } = mongoose.connection.collections;
    festivals.drop()
    .then(() => done())
    .catch(() => done());
});
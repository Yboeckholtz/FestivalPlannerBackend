const FestivalsController = require('../controllers/festivals_controller');

module.exports = (app) => {
// watch for incoming requests of method GET
// to the route http://localhost:3050/api
app.get('/api', FestivalsController.greeting);

app.post('/api/festivals', FestivalsController.create)

app.put('api/festivals/:id', FestivalsController.edit)

app.delete('api/festivals:/id', FestivalsController.delete)

};
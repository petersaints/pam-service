// Initializes the `entities` service on path `/entities`
const { Entities } = require('./entities.class');
const createModel = require('../../models/entities.model');
const hooks = require('./entities.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    //paginate: app.get('paginate'),
    multi: true
  };

  // Initialize our service with any options it requires
  app.use('/entities', new Entities(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('entities');

  service.hooks(hooks);
};

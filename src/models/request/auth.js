const Joi = require('@hapi/joi');

module.exports = {
  // Auth Login by User
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      userEmail: Joi.string().required(),
      userPass: Joi.string().required(),
    },
    model: 'Auth Login', // Name of the model
    group: 'Auth Login', // Swagger tag for apis.
    description: 'Login with User that Created by API "Users" to Get JWT and Auth',
  },
};

const Joi = require('@hapi/joi');

module.exports = {
  // create Shippers
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      shipperName: Joi.string().required(),
      shipperPhone: Joi.string().required(),
      shipperIdentity: Joi.string().required(),
      shipperAddress: Joi.string().required(),
    },
    model: 'createShippers', // Name of the model
    group: 'Shippers', // Swagger tag for apis.
    description: 'Create Shippers and save into database',
  },

  //Retrieve All Shippers
  1: {
    model: 'Retrieve All Shippers',
    group: 'Shippers',
    description: 'Retrieve All Shippers',
  },

  //Retrieve Shippers By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve Shippers By ID',
    group: 'Shippers',
    description: 'RetrieveShippers By ID',
  },

  //Update Shippers By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      shipperName: Joi.string().required(),
      shipperPhone: Joi.string().required(),
      shipperIdentity: Joi.string().required(),
      shipperAddress: Joi.string().required(),
    },
    model: 'Update Shippers By ID',
    group: 'Shippers',
    description: 'Update Shippers By ID and Save Into Database',
  },
  //Delete Shippers By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete Shippers By ID',
    group: 'Shippers',
    description: 'Delete Shippers By ID',
  },
};

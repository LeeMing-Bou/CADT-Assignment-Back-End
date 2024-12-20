const Joi = require('@hapi/joi');

module.exports = {
  // create Customers
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      cusName: Joi.string().required(),
      cusPhone: Joi.string().required(),
      cusEmail: Joi.string().required(),
      cusAddress: Joi.string().required(),
    },
    model: 'createCustomers', // Name of the model
    group: 'Customers', // Swagger tag for apis.
    description: 'Create Customers and save into database',
  },

  //Retrieve All Customers
  1: {
    model: 'Retrieve All Customers',
    group: 'Customers',
    description: 'Retrieve All Customers',
  },

  //Retrieve Customers By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve Customers By ID',
    group: 'Customers',
    description: 'RetrieveCustomers By ID',
  },

  //Update Customers By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      cusName: Joi.string().required(),
      cusPhone: Joi.string().required(),
      cusEmail: Joi.string().required(),
      cusAddress: Joi.string().required(),
    },
    model: 'Update Customers By ID',
    group: 'Customers',
    description: 'Update Customers By ID and Save Into Database',
  },
  //Delete Customers By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete Customers By ID',
    group: 'Customers',
    description: 'Delete Customers By ID',
  },
};

const Joi = require('@hapi/joi');

module.exports = {
  // create ProductOrdered
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      proID: Joi.string().required(),
      cusID: Joi.string().required(),
      empID: Joi.string().required(),
      proOrderNote: Joi.string(),
    },
    model: 'createProductOrdered', // Name of the model
    group: 'ProductOrdered', // Swagger tag for apis.
    description: 'Create ProductOrdered and save into database',
  },

  //Retrieve All ProductOrdered
  1: {
    model: 'Retrieve All ProductOrdered',
    group: 'ProductOrdered',
    description: 'Retrieve All ProductOrdered',
  },

  //Retrieve ProductOrdered By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve ProductOrdered By ID',
    group: 'ProductOrdered',
    description: 'RetrieveProductOrdered By ID',
  },

  //Update ProductOrdered By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      proID: Joi.string().required(),
      cusID: Joi.string().required(),
      empID: Joi.string().required(),
      proOrderNote: Joi.string(),
    },
    model: 'Update ProductOrdered By ID',
    group: 'ProductOrdered',
    description: 'Update ProductOrdered By ID and Save Into Database',
  },
  //Delete ProductOrdered By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete ProductOrdered By ID',
    group: 'ProductOrdered',
    description: 'Delete ProductOrdered By ID',
  },
};

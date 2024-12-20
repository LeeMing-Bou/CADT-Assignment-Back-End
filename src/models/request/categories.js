const Joi = require('@hapi/joi');

module.exports = {
  // createCategories
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      catName: Joi.string().required(),
      catDes: Joi.string().required(),
    },
    model: 'createCategories', // Name of the model
    group: 'Categories', // Swagger tag for apis.
    description: 'Create Categories and save into database',
  },

  //Retrieve All Categories
  1: {
    model: 'Retrieve All Categories',
    group: 'Categories',
    description: 'Retrieve All Categories',
  },

  //Retrieve Categories By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve Categories By ID',
    group: 'Categories',
    description: 'RetrieveCategories By ID',
  },

  //Update Categories By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      catName: Joi.string().required(),
      catDes: Joi.string().required(),
    },
    model: 'Update Categories By ID',
    group: 'Categories',
    description: 'Update Categories By ID and Save Into Database',
  },
  //Delete Categories By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete Categories By ID',
    group: 'Categories',
    description: 'Delete Categories By ID',
  },
};

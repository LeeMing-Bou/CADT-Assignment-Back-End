const Joi = require('@hapi/joi');

module.exports = {
  // create Products
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      proName: Joi.string().required(),
      proPrice: Joi.string().required(),
      proQty: Joi.string().required(),
    },
    model: 'createProducts', // Name of the model
    group: 'Products', // Swagger tag for apis.
    description: 'Create Products and save into database',
  },

  //Retrieve All Products
  1: {
    model: 'Retrieve All Products',
    group: 'Products',
    description: 'Retrieve All Products',
  },

  //Retrieve Products By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve Products By ID',
    group: 'Products',
    description: 'RetrieveProducts By ID',
  },

  //Update Products By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      proName: Joi.string().required(),
      proPrice: Joi.string().required(),
      proQty: Joi.string().required(),
    },
    model: 'Update Products By ID',
    group: 'Products',
    description: 'Update Products By ID and Save Into Database',
  },
  //Delete Products By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete Products By ID',
    group: 'Products',
    description: 'Delete Products By ID',
  },
};

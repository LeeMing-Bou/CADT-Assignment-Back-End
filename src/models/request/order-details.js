const Joi = require('@hapi/joi');

module.exports = {
  // create OrderDetails
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      detailNo: Joi.string().required(),
      proOrderID: Joi.string().required(),
      proID: Joi.string().required(),
      Qty: Joi.string().required(),
    },
    model: 'createOrderDetails', // Name of the model
    group: 'OrderDetails', // Swagger tag for apis.
    description: 'Create OrderDetails and save into database',
  },

  //Retrieve All OrderDetails
  1: {
    model: 'Retrieve All OrderDetails',
    group: 'OrderDetails',
    description: 'Retrieve All OrderDetails',
  },

  //Retrieve OrderDetails By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve OrderDetails By ID',
    group: 'OrderDetails',
    description: 'RetrieveOrderDetails By ID',
  },

  //Update OrderDetails By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      detailNo: Joi.string().required(),
      proOrderID: Joi.string().required(),
      proID: Joi.string().required(),
      Qty: Joi.string().required(),
    },
    model: 'Update OrderDetails By ID',
    group: 'OrderDetails',
    description: 'Update OrderDetails By ID and Save Into Database',
  },
  //Delete OrderDetails By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete OrderDetails By ID',
    group: 'OrderDetails',
    description: 'Delete OrderDetails By ID',
  },
};

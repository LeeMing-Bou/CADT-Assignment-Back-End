const Joi = require('@hapi/joi');

module.exports = {
  // create Employees
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      empFirstName: Joi.string().required(),
      empLasttName: Joi.string().required(),
      empName: Joi.string().required(),
      empGender: Joi.string().required(),
      empEmail: Joi.string().required(),
      empPhone: Joi.string().required(),
      empPosition: Joi.string().required(),
      empAddresss: Joi.string().required(),
      empBD: Joi.string().required(),
      empStatus: Joi.string().required(),
    },
    model: 'createEmployees', // Name of the model
    group: 'Employees', // Swagger tag for apis.
    description: 'Create Employees and save into database',
  },

  //Retrieve All Employees
  1: {
    model: 'Retrieve All Employees',
    group: 'Employees',
    description: 'Retrieve All Employees',
  },

  //Retrieve Employees By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve Employees By ID',
    group: 'Employees',
    description: 'RetrieveEmployees By ID',
  },

  //Update Employees By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      empFirstName: Joi.string().required(),
      empLasttName: Joi.string().required(),
      empName: Joi.string().required(),
      empGender: Joi.string().required(),
      empEmail: Joi.string().required(),
      empPhone: Joi.string().required(),
      empPosition: Joi.string().required(),
      empAddresss: Joi.string().required(),
      empBD: Joi.string().required(),
      empStatus: Joi.string().required(),
    },
    model: 'Update Employees By ID',
    group: 'Employees',
    description: 'Update Employees By ID and Save Into Database',
  },
  //Delete Employees By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete Employees By ID',
    group: 'Employees',
    description: 'Delete Employees By ID',
  },
};

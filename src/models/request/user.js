const Joi = require('@hapi/joi');

module.exports = {
  // create Users
  // 0 1 2 3 ... Ref to Route of each Router
  0: {
    body: {
      userName: Joi.string().required(),
      userPass: Joi.string().required(),
      userEmail: Joi.string().required(),
      userRole: Joi.string().required(),
      userProfile: Joi.string(),
    },
    model: 'createUsers', // Name of the model
    group: 'Users', // Swagger tag for apis.
    description: 'Create Users and save into database',
  },

  //Retrieve All Users
  1: {
    model: 'Retrieve All Users',
    group: 'Users',
    description: 'Retrieve All Users',
  },

  //Retrieve Users By ID
  2: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Retrieve Users By ID',
    group: 'Users',
    description: 'RetrieveUsers By ID',
  },

  //Update Users By ID
  3: {
    path: {
      id: Joi.string().required(),
    },
    body: {
      userName: Joi.string().required(),
      userPass: Joi.string().required(),
      userEmail: Joi.string().required(),
      userRole: Joi.string().required(),
      userProfile: Joi.string(),
    },
    model: 'Update Users By ID',
    group: 'Users',
    description: 'Update Users By ID and Save Into Database',
  },
  //Delete Users By ID
  4: {
    path: {
      id: Joi.string().required(),
    },
    model: 'Delete Users By ID',
    group: 'Users',
    description: 'Delete Users By ID',
  },
};

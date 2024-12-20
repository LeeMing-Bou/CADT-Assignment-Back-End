// The name of each response payload should be model name defined in Request model schema.
// The name of each response payload should be  model name defined in Request model schema and should sufix with ResponseModel.

module.exports = {
  loginAuth: {
    201: {
      message: {
        type: 'Your account has logged in successfully.',
      },
    },
    500: {
      internal: {
        type: 'Internal server error!',
      },
    },
  },
};

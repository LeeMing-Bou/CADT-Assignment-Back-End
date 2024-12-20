// The name of each response payload should be model name defined in Request model schema.
// The name of each response payload should be  model name defined in Request model schema and should sufix with ResponseModel.

module.exports = {
  createOrderDetail: {
    201: {
      message: {
        type: 'Successfully created OrderDetail',
      },
    },
    500: {
      internal: {
        type: 'Internal server error!',
      },
    },
  },
};

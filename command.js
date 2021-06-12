const vehicle = {
  requestInfo: function (model, id) {
    return 'The information for ' + model + ' with ID ' + id + ' is foobar';
  },
  buyVehicle: function (model, id) {
    return 'You have successfully purchased Item ' + id + ', a ' + model;
  },
  arrangeViewing: function (model, id) {
    console.log(
      'You have successfully booked a viewing of ' + model + ' ( ' + id + ' ) '
    );
    return (
      'You have successfully booked a viewing of ' + model + ' ( ' + id + ' ) '
    );
  },
  execute: (method, ...args) => {
    const [model, id] = args;
    return vehicle[method](model, id);
  },
};

vehicle.execute('arrangeViewing', 'aqui é ', 1234);

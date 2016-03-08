// Set up login services
Meteor.startup(function() {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );

  // Add Twitter configuration entry
  ServiceConfiguration.configurations.update(
    { service: "twitter" },
    { $set: {
        consumerKey: "TMQoUMnXiKsIcvJUsKrUnnqNF",
        secret: "yUud2hz95FVk64nXoviuXQyqUuIP1ZlE2VZXdcBVNhN1tqWMRi"
      }
    },
    { upsert: true }
  );

});
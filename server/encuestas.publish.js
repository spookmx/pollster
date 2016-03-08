'use strict'

Meteor.publish('encuestas', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfEncuestas', Encuestas.find(where), {noReady: true});
  return Encuestas.find(where, options);
});

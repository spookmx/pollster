Encuestas = new Mongo.Collection('encuestas');

Encuestas.allow({
  insert: function(userId, encuesta) {
    return userId;
  },
  update: function(userId, encuesta, fields, modifier) {
    return userId;
  },
  remove: function(userId, encuesta) {
    return userId;
  }
});
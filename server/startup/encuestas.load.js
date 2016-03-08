Meteor.startup(function() {
  if(Encuestas.find().count() === 0) {
    var encuestas = [
      {
        'name': 'encuesta 1'
      },
      {
        'name': 'encuesta 2'
      }
    ];
    encuestas.forEach(function(encuesta) {
      Encuestas.insert(encuesta);
    });
  }
});
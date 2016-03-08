'use strict'

angular.module('pollsterApp')
.controller('EncuestaDetailCtrl', function($scope, $stateParams) {
  
  $scope.helpers({
    encuesta: function() {
      return Encuestas.findOne({ _id: $stateParams.encuestaId }); 
    }
  });
  
  $scope.subscribe('encuestas');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      delete $scope.encuesta._id;
      Encuestas.update({
        _id: $stateParams.encuestaId
      }, {
        $set: $scope.encuesta
      }, function(error) {
        if(error) {
          console.log('Unable to update the encuesta'); 
        } else {
          console.log('Done!');
        }
      });
    }
  };
        
  $scope.reset = function() {
    $scope.encuesta.reset();
  };
});
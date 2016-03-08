'use strict'

angular.module('pollsterApp')
.controller('EncuestasListCtrl', function($scope, $ionicScrollDelegate) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.helpers({
    encuestas: function() {
      return Encuestas.find({}, {
        sort: $scope.getReactively('sort') 
      });
    },
    encuestasCount: function() {
      return Counts.get('numberOfEncuestas');
    }
  });
                  
  $scope.subscribe('encuestas', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Encuestas.insert($scope.newEncuesta);
      $scope.newEncuesta = undefined;
      $ionicScrollDelegate.resize();
    }
  };
                  
  $scope.remove = function(encuesta) {
    Encuestas.remove({_id:encuesta.id});
    $ionicScrollDelegate.resize();
  };
                  
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
                  
  return $scope.$watch('orderProperty', function() {
    if ($scope.orderProperty) {
      $scope.sort = {
        name_sort: parseInt($scope.orderProperty)
      };
    }
  });
});
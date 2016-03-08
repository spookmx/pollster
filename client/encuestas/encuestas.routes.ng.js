'use strict'

angular.module('pollsterApp')
.config(function($stateProvider) {
  $stateProvider
  .state('encuestas-list', {
    url: '/encuestas',
    templateUrl: 'client/encuestas/encuestas-list.view.ng.html',
    controller: 'EncuestasListCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  })
  .state('encuesta-detail', {
    url: '/encuestas/:encuestaId',
    templateUrl: 'client/encuestas/encuesta-detail.view.ng.html',
    controller: 'EncuestaDetailCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});
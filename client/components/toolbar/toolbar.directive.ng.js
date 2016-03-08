'use strict'

angular.module('pollsterApp')
.controller('toolbarController', ['$scope', function($scope) {
  $scope.name = 'Pollster';
  $scope.helpers({
		status: () => {
		  return Meteor.status();
		}
	});
}])
.directive('toolbar', function() {
  return {
	  controller: 'toolbarController',
	  scope: true,
	  restrict: 'AE',
	  templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
	  replace: true
  };
});
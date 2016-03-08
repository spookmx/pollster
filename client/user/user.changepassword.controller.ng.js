'use strict'

angular.module('pollsterApp')
.controller('UserCtrl', function($scope, $ionicLoading) {
	$scope.helpers({
		isLoggedIn: () => {
		  return Meteor.userId() !== null;
		},
		currentUser: () => {
		  return Meteor.user();
		}
	});
  	$scope.viewName = 'User';
  	$scope.login = function() {
		$ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-light"></ion-spinner>'});
      	Meteor.loginWithPassword($scope.loginForm.email, $scope.loginForm.password, $scope.loginCompleted);
	};
	$scope.loginCompleted = function() {
		console.log("Login with Email completed")
		$ionicLoading.hide();
		Meteor.users.update({_id: Meteor.userId()},{$set: { 'profile.type': 'email', 'profile.online': true}});
	};
	$scope.logout = function() {
		$ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-light"></ion-spinner>'});
		Meteor.users.update({_id: Meteor.userId()},{$set: {'profile.online': false}});
      	Meteor.logout($ionicLoading.hide());
	};
	$scope.loginTwitter = function() {
		$ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-light"></ion-spinner>'});
      	Meteor.loginWithTwitter({}, $scope.loginTwitterCompleted);
	};
	$scope.loginTwitterCompleted = function() {
		console.log("Login with Twitter completed")
		$ionicLoading.hide();
		Meteor.users.update({_id: Meteor.userId()},{$set: { 'profile.type': 'twitter', 'profile.online': true}});
	};
	$scope.loginFacebook= function() {
		$ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-light"></ion-spinner>'});
      	Meteor.loginWithFacebook({}, $ionicLoading.hide());
	};
	
});
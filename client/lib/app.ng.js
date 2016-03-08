angular.module('pollsterApp', [
  'angular-meteor',
  'ionic',
  'angularUtils.directives.dirPagination',
  'accounts.ui',
  'angular-meteor.auth'
]);

onReady = function() {
  angular.bootstrap(document, ['pollsterApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
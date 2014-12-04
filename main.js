var todoApp = angular.module('todoApp', ['controllers']);

var controllers = angular.module('controllers', []);

controllers.controller('TodoCtrl', ['$scope', function($scope) {
  $scope.items = ["item1", "item2"];

  $scope.addItem = function(item) {
    console.log("adding item", item);
    $scope.items.push(item);
  };
}]);

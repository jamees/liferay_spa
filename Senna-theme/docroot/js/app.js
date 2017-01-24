appAngular.controller('AppCtrl', function($scope) {
  console.log('set current Nav');
  $scope.isOpen = true;
  $scope.dataWebContent = "Desde JS";
  $scope.demo = {
    isOpen: false,
    count: 0,
    selectedDirection: 'left'
  };
});
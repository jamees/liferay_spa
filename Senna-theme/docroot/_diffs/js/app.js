app.controller('AppCtrl', function($scope) {
  console.log('set current Nav');
  $scope.isOpen = true;
  $scope.demo = {
    isOpen: false,
    count: 0,
    selectedDirection: 'left'
  };
});
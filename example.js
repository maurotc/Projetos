angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'ui.utils'])

.config(function ($provide) {

  $provide.decorator('datepickerPopupDirective', function ($delegate) {
    var directive = $delegate[0];
    var link = directive.link;

    directive.compile = function () {
      return function (scope, element, attrs) {
        link.apply(this, arguments);
        element.mask("99/99/9999");
      };
    };

    return $delegate;
  });

})

.controller('DatepickerDemoCtrl', function ($scope) {
  
  $scope.formatDate = function(theDate) {
    var zeroPad = function(str) {
      return ('0' + str).slice(-2);
    };
    
    var day = zeroPad(theDate.getDate());
    var month = zeroPad(theDate.getMonth());
    var year = theDate.getFullYear();
    
    return [day, month, year].join('/');
  };
  
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
  
  $scope.open2 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened2 = true;
  };
});
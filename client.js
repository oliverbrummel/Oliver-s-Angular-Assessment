var app = angular.module('angularApp', []);

app.controller('AngularController', ['$http', function($http){
 var vm = this;
 var clicks = 0;

 vm.initialMessage = '';
 vm.previousMessages = [];

 vm.buttonClicked = function(){
   vm.showMessage = true;
   console.log(vm.initialMessage);
   clicks ++;
   vm.previousMessages.push(vm.initialMessage);
   vm.initialMessage = vm.message;


   if (clicks > 1){
     vm.showPrevious = true;
    } else{
      vm.showPrevious = false;
      vm.previousMessages.shift();
    };

  //  console.log(vm.previousMessages);

};//close vm.buttonClicked function

}]);//close controller

app.controller("MonCtrl", function($scope) {
 $scope.user = {name:"Sebastien", lastName:"Olivier"};
 console.log("Controller 1");
 $scope.prenom = 'toto';
})
.controller("SonCtrl", function($scope) {       
 $scope.prenom = "Lamine";
 $scope.tab = [1, 2, 3, 4];

 $scope.action = function() {
 	alert('hello');
 }

 $scope.$watch("prenom", function(newValue, oldValue) {
    console.log(newValue, oldValue);
 })
 $scope.carre = function(nombre){
 	return(nombre*nombre);
 };
});
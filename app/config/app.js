var app = angular.module("MonApp",["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'app/views/accueil.html',
		controller : 'accueilController'
	}).when('/auteurs', {
		templateUrl : 'app/views/auteurs.html',
		controller : 'auteursController'
	}).when('/auteur', {
		templateUrl : 'app/views/auteur.html',
		controller : 'auteurController'
	})
})

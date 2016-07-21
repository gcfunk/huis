'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'ngAnimate'
]).config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/people-list");

  $stateProvider
    .state('people-list', {
      url: '/people-list',
      template: "<people-list></people-list>"
    })
    .state('game', {
      url: '/game',
      template: "<game></game>"
    });
});

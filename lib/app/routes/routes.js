'use strict';

angular.module('AZClient')
    .config(['$stateProvider', '$urlRouterProvider',
        function routesConfig($stateProvider, $urlRouterProvider, AZProvider) {

            $stateProvider
                // main abstract state
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: "app/views/base.html",
                    controller: 'LayoutController'
                })

                // home state
                .state('app.home', {
                    url: '',
                    templateUrl: "app/views/home.html",
                    controller: 'HomeController'
                });

            $urlRouterProvider.otherwise('/app');

        }]);
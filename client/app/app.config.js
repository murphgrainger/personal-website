(function() {
    'use strict';

    angular.module('app').config(config)

    function config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

        $locationProvider.html5Mode(true)

        $mdThemingProvider
            .theme('default')
            .primaryPalette('green')
            .warnPalette('red')
            .backgroundPalette('grey');

        $stateProvider
            .state({
                name: 'app',
                abstract: true,
                component: 'app',
            })
            .state({
                name: 'home',
                parent: 'app',
                url: '/',
                component: 'cardList',
            })
    }

}());

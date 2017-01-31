(function() {
    'use strict';

    angular.module('app').config(config)


    function config($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
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
                component: 'appBuild',
            })
            // .state({
            //     name: 'home',
            //     parent: 'app',
            //     url: '/',
            //     component: 'cardList',
            // })
            // .state({
            //     name: 'playground',
            //     parent: 'app',
            //     url: '/playground/',
            //     component: 'playGround',
            // })
    }

}());

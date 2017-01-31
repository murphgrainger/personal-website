(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);


    function AppController($http) {
        const vm = this;
        vm.$onInit = function() {
            console.log('hey');
        }

    }

})();

'use strict';

// main application configuration
angular.module('AZClient')
    // app config provider
    .provider('AZProvider', function AZProvider() {
        return {
            $get: function() {
                return {
                    name: "AZ Club Client",
                    apiUrl: "http://104.131.113.114:3003/api/",
                    templateDir: "app/views"
                }
            }
        }
    })
    // configuration phase
    .config(function() {
        console.log('Config phase')
    })
    // run phase
    .run(function($rootScope, AZProvider) {
        $rootScope.APP = AZProvider;
});

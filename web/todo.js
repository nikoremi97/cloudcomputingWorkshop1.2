/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app=angular.module('myApp',[]);
app.controller('listController',crtl);


function crtl($scope,$sce,$http){
    
    var trustedUrl=$sce.trustAsResourceUrl("http://localhost:4567/users");
    $http.get(trustedUrl).then(function(api){
        $scope.equipos=api.data;
    },function(api){
        $scope.error="Error "+api.status;
    });
    
}
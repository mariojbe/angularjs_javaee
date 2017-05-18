//var app = angular.module('tegra', []);
//var app = angular.module('tegra');

var app = angular.module('tegra', ['ngRoute']);

/*app.controller('mainController', ['$scope', function($scope){
 $scope.usuario = {nome: 'Mário Jorge'};
 
 $scope.contador = 0;
 
 $scope.addContador = function(){
 $scope.contador++;
 };
 
 $scope.pessoas = ['mário', 'jorge', 'batista', 'evangelista'];
 }]);*/

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {controller: "listController", templateUrl: "list.html"})// listar
            .when("/edit/:nome", {controller: "editController", templateUrl: "form.html"})
            .when("/new", {controller: "newController", templateUrl: "form.html"})
            .otherwise({redirectTo: "/"});
});

app.run(function ($rootScope) {
    $rootScope.bancos = ['Banco do Brasil', 'Itaú', 'Bradesco', 'Caixa Econômica Federal', 'Santander'];
});

app.controller('listController', ['$scope', function ($scope) {

    }]);

app.controller('editController', ['$scope', function editController($scope, $location, $routeParams) {
        $scope.title = 'Editar Bancos';
        $scope.banco = $routeParams.nome;
        $scope.bancoIndex = $scope.bancos.indexOf($scope.banco);

        $scope.salvar = function () {
            $scope.bancos[$scope.bancoIndex] = $scope.banco;
            $location.path('/');
        };

    }]);

app.controller('newController', ['$scope', function newController($scope, $location) {
        $scope.title = 'Novo Banco';
        $scope.banco = '';

        $scope.salvar = function () {
            $scope.bancos.push($scope.banco);
            $location.path('/');
        };

    }]);


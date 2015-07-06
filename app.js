var app = angular.module('todoApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [];
    localStorage.setItem('todos', JSON.stringify($scope.todos));

    
    $scope.add = function(){
        if (!$scope.newlist || $scope.newlist === '') {
            return;
        }
        $scope.todos.push({title: $scope.newlist, done: false});
        $scope.newlist = '';
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    $scope.clear = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done;
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
}]);
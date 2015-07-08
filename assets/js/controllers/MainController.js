app.controller('MainController', ['$scope', function($scope){

    $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [];
    localStorage.setItem('todos', JSON.stringify($scope.todos));
    $scope.hideClear = false;
    $scope.priority = 'normal';
        
    $scope.add = function(){
        $scope.hideClear = true;
        $scope.todos.push({title: $scope.newlist, done: false, priority: $scope.priority});
        $scope.newlist = '';
        $scope.priority = 'normal';
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    $scope.clear = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done;
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
    $scope.delete = function(index){
        $scope.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
        
}]);
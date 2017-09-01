/* register the modules the application depends upon here*/
angular.module('listings', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['listings']);

//https://stackoverflow.com/questions/12046928/how-to-use-regex-with-ng-repeat-in-angularjs
//Custom filter,substantially modified to work with the search term and with a set regular expression
app.filter('regex', function() {
    return function(input, field, scope) {
        if(scope.searchTerm != ''){
            var reg = scope.searchTerm.toLowerCase() + "+";
        }else{
            var reg = ".+";
        }
        var patt = new RegExp(reg);      
        var out = [];
        for (var i = 0; i < input.length; i++){
            if(patt.test(input[i][field[0]].toLowerCase()) || patt.test(input[i][field[1]].toLowerCase()))
                out.push(input[i]);
        }      
      return out;
    };
  });
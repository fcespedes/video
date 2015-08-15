(function () {
    var filterModule = angular.module('mFilter', []);
    
    filterModule.filter('myMovies', function () {
        return function (movies) {
            var result = [];

            if (movies) {
                movies.forEach(function (movie) {
                    if (movie.mine == true ) {
                        result.push(movie);
                    }
                });
            }

            return result;
        }
    });
}());
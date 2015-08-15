app.controller('MainController', ['$scope', '$http', function($scope, $http) {
   
  var movies = [
    {
      genre: "Crime, Drama",
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      mine: true
    },
    { 
      genre: "Crime, Drama",
      title: "Pulp Fiction", 
      director: "Quentin Tarantino",
      mine: true
    },
    { 
      genre: "Adventure, Fantasy",
      title: "The Lord of the Rings: The Return of the King", 
      director: "Peter Jackson",
      mine: true
    },
    { 
      genre: "Drama",
      title: "Fight Club", 
      director: "David Fincher",
      mine: true
    },
    { 
      genre: "Action, Mystery, Sci-Fi",
      title: "Inception", 
      director: "Christopher Nolan",
      mine: true
    },
    { 
      genre: "Crime, Drama",
      title: "The Godfather", 
      director: "Francis Ford Coppola",
      mine: false
    },
    { 
      genre: "Action, Crime, Drama",
      title: "The Dark Knight", 
      director: "Christopher Nolan",
      mine: false
    },
    { 
      genre: "Biography, Drama, History",
      title: "Schindler's List", 
      director: "Steven Spielberg",
      mine: false
    },
    { 
      genre: "Crime, Drama",
      title: "12 Angry Men", 
      director: "Sidney Lumet",
      mine: false
    },
    { 
      genre: "Western",
      title: "The Good, the Bad and the Ugly", 
      director: "Sergio Leone",
      mine: false
    },
    { 
      genre: "Action, Adventure, Fantasy",
      title: "Star Wars: Episode V - The Empire Strikes Back", 
      director: "Irvin Kershner",
      mine: false
    },
    { 
      genre: "Drama, Romance",
      title: "Forrest Gump", 
      director: "Robert Zemeckis",
      mine: false
    }
  ];

  var myMovies = [
    {
      genre: "Crime, Drama x",
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      mine: true
    },
    {
      genre: "Crime, Drama",
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      mine: true
    }
  ];

  $scope.dlist = movies;
  //enviar la lista por parametro para saber que lista mostrar en el html segun la opcion de allMovies o myMovies que escoja el usuario

  $scope.showMovies = function showMovies(movie){

    if (movie === 'mine'){
      $scope.dlist = myMovies;

    }else if (movie === 'all'){
      $scope.dlist = movies;

    }else if (movie === 'clear'){
      $scope.dlist = [];
    };
  };

  $scope.getHops = function(){
    console.log('into method ...');
    $http.get('http://api.brewerydb.com/v2/hops?key=152806a21a5799a336c636960866286d').
      then(function(response) {
        console.log(response);
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

}]);
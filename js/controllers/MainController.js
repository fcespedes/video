app.controller('MainController', ['$scope', '$filter', function($scope, $filter) {
   
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
  ]

  $scope.dlist = movies;
  //enviar la lista por parametro para saber que lista mostrar en el html segun la opcion de allMovies o myMovies que escoja el usuario

  $scope.showMovies = function showMovies(movie){

    if (movie == 'mine'){
      $scope.dlist = $filter('filter')(movies, {mine:true});

    }else if (movie == 'all'){
      $scope.dlist = movies;

    }else if (movie == 'clear'){
      $scope.dlist = [];
    };
  }
  
}]);
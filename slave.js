let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
 
let personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        private : false,
 };

 let filmLastSeen = prompt('Введите недавно просмотренный фильм', '');
 let filmLastSeenMark = prompt('Введите оценку указанного фильма', '');
 
personalMovieDB.movies = {
    [filmLastSeen] : filmLastSeenMark
};
console.log(personalMovieDB.movies);


filmLastSeen = prompt('Введите недавно просмотренный фильм', '');
filmLastSeenMark = prompt('Введите оценку указанного фильма', '');
 
personalMovieDB.movies = {
    [filmLastSeen] : filmLastSeenMark
};
console.log(personalMovieDB.movies);


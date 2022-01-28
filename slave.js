let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
 
let personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        private : false,
 };

 
 let filmLastSeen,
     filmLastSeenMark;

for (let i = 1; i <= personalMovieDB.count; i++ ) {
 
 
 
    do {
            filmLastSeen = prompt('Введите просмотренный фильм', '');
        }
        while (filmLastSeen == '' || filmLastSeen == undefined || filmLastSeen.length > 50);

    
    filmLastSeenMark = prompt('Введите оценку указанного фильма', '');
    personalMovieDB.movies[filmLastSeen] = filmLastSeenMark;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
}
else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
}
else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
}
else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);



let numberOfFilms,
    filmLastSeen,
    filmLastSeenMark;
 
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
}
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
//start();

let personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        private : false,
 };

 
function rememberMyFilms() {
    for (let i = 1; i <= personalMovieDB.count; i++ ) {
        do {
                filmLastSeen = prompt('Введите просмотренный фильм', '');
            }
            while (filmLastSeen == '' || filmLastSeen == undefined || filmLastSeen.length > 50);
    
        filmLastSeenMark = prompt('Введите оценку указанного фильма', '');
        personalMovieDB.movies[filmLastSeen] = filmLastSeenMark;
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
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
}
//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}
//showMyDB();

function writeYourGenres() {
    for (let i=1; i<=3; i++ ) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres();

console.log(personalMovieDB);



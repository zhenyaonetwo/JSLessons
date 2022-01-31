let numberOfFilms,
    filmLastSeen,
    filmLastSeenMark;


let personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
        while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
        for (let i = 1; i <= personalMovieDB.count; i++) {
            do {
                filmLastSeen = prompt('Введите просмотренный фильм', '');
            }
            while (filmLastSeen == '' || filmLastSeen == undefined || filmLastSeen.length > 50);
            filmLastSeenMark = prompt('Введите оценку указанного фильма', '');
            personalMovieDB.movies[filmLastSeen] = filmLastSeenMark;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.private = !(personalMovieDB.private);
    },
    writeYourGenres : function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
            while(personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
            }
        }
        personalMovieDB.genres.forEach(function(item, j, genres ){
            console.log(`Любимый жанр № ${j+1} - это ${item}`);
        });
    },
};


personalMovieDB.writeYourGenres();
console.log(personalMovieDB);





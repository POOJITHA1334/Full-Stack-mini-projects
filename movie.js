const movies = [];

function addMovie() {
    const movieName = document.getElementById('movieName').value;
    const movieRating = document.getElementById('movieRating').value;

    if (movieName && movieRating >= 1 && movieRating <= 5) {
        const movie = {
            name: movieName,
            rating: movieRating
        };
        movies.push(movie);
        displayMovies();
        document.getElementById('movieName').value = '';
        document.getElementById('movieRating').value = '';
    } else {
        alert('Please enter a valid movie name and rating (1-5)');
    }
}

function displayMovies() {
    const movieList = document.getElementById('movies');
    movieList.innerHTML = '';
    movies.forEach((movie, index) => {
        const movieItem = document.createElement('li');
        movieItem.innerHTML = `<span class="movie-name">${movie.name}</span> - <span class="movie-rating">${movie.rating}</span> <button onclick="removeMovie(${index})">Remove</button>`;
        movieList.appendChild(movieItem);
    });
}

function removeMovie(index) {
    movies.splice(index, 1);
    displayMovies();
}

// const MOVIE_DB_API = '16d05b1ea65094d893b14e9c9241bf31';
// const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
// const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
// const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';
// const Hiren ='https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${MOVIE_DB_API}'
var _0x95c3=["\x31\x36\x64\x30\x35\x62\x31\x65\x61\x36\x35\x30\x39\x34\x64\x38\x39\x33\x62\x31\x34\x65\x39\x63\x39\x32\x34\x31\x62\x66\x33\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x74\x68\x65\x6D\x6F\x76\x69\x65\x64\x62\x2E\x6F\x72\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x61\x67\x65\x2E\x74\x6D\x64\x62\x2E\x6F\x72\x67\x2F\x74\x2F\x70\x2F\x77\x35\x30\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x76\x69\x61\x2E\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x2E\x63\x6F\x6D\x2F\x31\x35\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x74\x68\x65\x6D\x6F\x76\x69\x65\x64\x62\x2E\x6F\x72\x67\x2F\x33\x2F\x6D\x6F\x76\x69\x65\x2F\x7B\x6D\x6F\x76\x69\x65\x5F\x69\x64\x7D\x2F\x72\x65\x76\x69\x65\x77\x73\x3F\x61\x70\x69\x5F\x6B\x65\x79\x3D\x24\x7B\x4D\x4F\x56\x49\x45\x5F\x44\x42\x5F\x41\x50\x49\x7D"];const MOVIE_DB_API=_0x95c3[0];const MOVIE_DB_ENDPOINT=_0x95c3[1];const MOVIE_DB_IMAGE_ENDPOINT=_0x95c3[2];const DEFAULT_POST_IMAGE=_0x95c3[3];const Hiren=_0x95c3[4]

function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function generateMovieDBUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
    return url;
}


function getTopRatedMovies() {
    const url = generateMovieDBUrl(`/movie/top_rated`);
    const render = renderMovies.bind({ title: 'Top Rated Movies' })
    requestMovies(url, render, handleGeneralError);
}

function getTrendingMovies() {
    const url = generateMovieDBUrl('/trending/movie/day');
    const render = renderMovies.bind({ title: 'Trending Movies' })
    requestMovies(url, render, handleGeneralError);
}


function searchUpcomingMovies() {
    const url = generateMovieDBUrl('/movie/upcoming');
    const render = renderMovies.bind({ title: 'Upcoming Movies' })
    requestMovies(url, render, handleGeneralError);
}


function searchPopularMovie() {
    const url = generateMovieDBUrl('/movie/popular');
    const render = renderMovies.bind({ title: 'Popular Movies' });
    requestMovies(url, render, handleGeneralError);
}

// Invoke a different function for search movies
function searchMovie(value) {
    const url = generateMovieDBUrl('/search/movie') + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleGeneralError);
}


function getVideosByMovieId(movieId, content) {
    const url = generateMovieDBUrl(`/movie/${movieId}/videos`);
    const render = createVideoTemplate.bind({ content });
    requestMovies(url, render, handleGeneralError);
}

const API_KEY = "2c7d247944d32111831ee774d8a78ac8";
const serverUri = "https://api.themoviedb.org/3/";
const movieCategories = [
    {
        name: "Latest",
        selected: false,
        id: 1,
        ressource: "latest"
    },
    {
        name: "Now Playing",
        selected: false,
        id: 2,
        ressource: "now_playing"
    },
    {
        name: "Popular",
        selected: false,
        id: 3,
        ressource: "popular"
    },
    {
        name: "Top Rated",
        selected: false,
        id: 4,
        ressource: "top_rated"
    },
    {
        name: "Upcoming",
        selected: false,
        id: 5,
        ressource: "upcoming"
    },
];


export default { API_KEY, serverUri, movieCategories };
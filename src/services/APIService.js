import HTTPService from './HTTPService';
// import models, reponses to use if typescript

export default {
    /* All API Requests in App belong here */

    /**
     * - Request for all movies (with pages)
     */
    async getMovies(page) {
        return await HTTPService.get('discover/movie', {
            params: {
                page: page,
                //language: lang
            }
        })
    },

    /**
     * - Requst for all Categories
     */
    async getMoviesByCategory(category, page) {
        return await HTTPService.get('movie/' + category, {
            params: {
                page: page,
                //language: lang
            }
        })
    },

    /**
     * - Searches Movies Containing a querystring
     */
    async getMoviesContaining(query, page) {
        return await HTTPService.get('search/movie', {
            params: {
                query: query,
                page: page,
                //language: lang
            }
        })
    }
}
import HTTPService from './HTTPService';
// import models, reponses to use if typescript

export default {
    /* All API Requests in App belong here */

    /**
     * - Requst for all Categories
     */
    async getMoviesByCategory(category, page) {
        return await HTTPService.get('movie/ ' + category, {
            params: {
                page: page
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
                page: page
            }
        })
    }
}
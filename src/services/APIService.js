import HTTPService from './HTTPService';
// import models, reponses to use if typescript

export default {
    /* All API Requests in App belong here */

    /**
     * - example request
     */
    async getMovies(page) {
        return await HTTPService.get('discover/movie', {
            params: {
                page: page
            }
        })
    }
}
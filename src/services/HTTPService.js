import axios from 'axios';
import config from '../../config/config';

/**
 * - axios object automatically adds auth for every request
 * - automatically axios error handling
 */
const instance = axios.create({
    baseURL: config.serverUri
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            // show errorpage etc. (unauthorized)
            // api key invalid
        } else {
            return Promise.reject(error);
        }
    }
)

instance.interceptors.request.use(async (request) => {
    // jwt implementation possible
    const key = config.API_KEY;
    if (request) {
        request.params.api_key = key;
    }
    return request;
});

export default instance;
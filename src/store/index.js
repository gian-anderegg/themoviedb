import { createStore } from "vuex";
import { languageHelper } from "../helpers/languageHelper.js";

export default createStore({
    state: {
        queryLanguage: "en-US", // default request language
        test: "en",
        clickedMovie: undefined
    },
    mutations: {
        setQueryLanguage(state, newValue) {
            state.queryLanguage = languageHelper(newValue);
            console.log(state.queryLanguage);
        },
        setClickedMovie(state, newValue) {
            state.clickedMovie = newValue;
        }
    }
})
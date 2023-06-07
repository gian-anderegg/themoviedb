import filmSection from "../../components/filmSection/filmSection.vue"
import categories from "../../components/categories/categories.vue"
import APIService from "../../services/APIService"
import config from "../../../config/config"

export default {
    name: 'Home',
    components: {
        categories,
        filmSection,
    },
    props: {
        searchQuery: String,
      },
    data() {
        return {
            categories: config.movieCategories,
            selectedCategoryRessource: '',
            isLoading: false,
            isSearch: true,
            isSearchQuery: false,
            pageCounter: 1,
            movies: [],
            moviesFound: null,
        }
    },
    methods: {
        // load next page (categories)
        handleIntersection(entries) {
        if (!this.isSearch) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio === 1) { 
                        if (this.selectedCategoryRessource != 'latest') {
                            this.pageCounter++;
                            this.loadNextMoviesByCategory(this.selectedCategoryRessource, this.pageCounter);
                        } else {
                            console.log("LATEST CATEGORY");
                        }
                        console.log("observer end of page");
                    }
                });
            }
        },
        // load next page (normal & search)
        handleScroll() {
            const intersectionTarget = this.$refs.intersectionTargetRef;
            const targetBottomPosition = intersectionTarget.offsetTop + intersectionTarget.offsetHeight;
            const isEndOfElement = (window.innerHeight + window.pageYOffset) >= targetBottomPosition;

            if (isEndOfElement) {
                if (this.isSearchQuery) {
                    this.pageCounter++;
                    this.loadNextMoviesBySearchQuery(this.pageCounter);
                } else {
                    this.pageCounter++;
                    this.loadNextMovies(this.pageCounter);
                }
            }
        },
        selectedStateChange(selected) {
            this.categories = selected;
            this.$emit("categorySelected");

            if (this.categories.every(category => category.selected === false)) {
                this.isSearch = true;
                window.addEventListener('scroll', this.handleScroll);
                this.pageCounter = 1;
                this.loadMovies();
            } else {
                window.removeEventListener('scroll', this.handleScroll);
                this.selectedCategoryRessource = this.categories.filter(category => category.selected === true)[0].ressource;
                this.pageCounter = 1;
                this.isSearch = false;
                this.loadMoviesByCategory(this.selectedCategoryRessource);
            }
        },
        // load init functions
        async loadMoviesByCategory(ressource) {
            const res = await APIService.getMoviesByCategory(ressource, 1);
            
            
            if (ressource == 'latest') {
                this.movies = [];
                this.movies.push(res.data);
            } else {
                this.movies = res.data.results;
            }
            this.moviesFound = res.data.total_results;
        },
        async loadMovies() {
            const res = await APIService.getMovies(1);
            this.movies = res.data.results;
            this.moviesFound = res.data.total_results;
        },
        // load next functions
        async loadNextMovies(page) {
            if (this.isLoading) return;
            this.isLoading = true;

            try {
                const res = await APIService.getMovies(page);
                const newMovies = res.data.results;
                this.movies = [...this.movies, ...newMovies];

                setTimeout(() => {
                    this.isLoading = false;
                }, 0);
            } catch (error) {
                console.error(error);
                this.isLoading = false;
            }
        },
        async loadNextMoviesByCategory(ressource, page) {
            // latest excepted (catched in handleIntersection function)
            if (this.isLoading) return;
            this.isLoading = true;

            try {
                const res = await APIService.getMoviesByCategory(ressource, page);
                const newMovies = res.data.results;
                this.movies = [...this.movies, ...newMovies];

                setTimeout(() => {
                    this.isLoading = false;
                }, 0);
            } catch (error) {
                console.error(error);
                this.isLoading = false;
            }
        },
        async loadMoviesBySearchQuery(searchQuery, page) {
            const res = await APIService.getMoviesContaining(searchQuery,page);
            this.movies = res.data.results;
            this.moviesFound = res.data.total_results;
        },
        async loadNextMoviesBySearchQuery(page) {
            if (this.isLoading) return;
            this.isLoading = true;

            try {
                const res = await APIService.getMoviesContaining(this.searchQuery,page);
                const newMovies = res.data.results;
                this.movies = [...this.movies, ...newMovies];

                setTimeout(() => {
                    this.isLoading = false;
                }, 0);
            } catch (error) {
                console.error(error);
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.loadMovies();
        window.addEventListener('scroll', this.handleScroll);

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }

        const observer = new IntersectionObserver(this.handleIntersection, options);
        observer.observe(this.$refs.intersectionTargetRef);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
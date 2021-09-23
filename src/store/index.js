import { createStore } from 'vuex'
import jokeModule from './joke/index'
const store = createStore({
    namespaced: true,
    modules: {
        joke: jokeModule
    }
})
export default store
import jokeGetters from './getters'
import jokeMutations from './mutations'
import jokeActions from './actions'

export default {
    namespaced: true,
    state() {
        return {
            jokes: {
                goodJoke: 'joke112233'
            }
        }
    },
    getters: jokeGetters,
    mutations: jokeMutations,
    actions: jokeActions
}
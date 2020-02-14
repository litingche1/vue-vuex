export default {
    namespaced: true,
    state: {
        msName: 'I am ms',
    },
    mutations: {
        setMSNAMES: (state, routers) => {
            state.msName = routers;
        }
    },
    actions: {
        setms: ({
            commit
        }, routers) => {
            commit('setMSNAMES', routers);
        }
    },
    getters: {
        getMSNAMES(state, b, rootstate) {
            console.log(rootstate)
            return state.msName
        }
    },
    modules: {}
}
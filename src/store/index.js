import { createStore } from "vuex";
import { SET_USER, LOGOUT_USER } from "./mutations";
import http from "@/http";

export const store = createStore({
    state: {
        user: {
            id: 0,
            name: "",
            registration: "",
            token: ""
        }
    },

    mutations: {
        [SET_USER](state, { id, name, registration, token }) {
            state.user.id = id;
            state.user.name = name;
            state.user.registration = registration;
            state.user.token = token;
        },

        [LOGOUT_USER] (state) {
            state.user.id = 0;
            state.user.name = "";
            state.user.registration = "";
            state.user.token = "";
        }
    },

    actions: {
        signIn({ commit }, user) {
            return new Promise((resolve, reject) => {
                http.post("/api/user/authenticate", user)
                    .then(response => {
                        commit(SET_USER, {
                            id: response.data.id,
                            name: response.data.name,
                            registration: response.data.registration,
                            token: response.data.token
                        });
                        
                        resolve(response);
                    })
                    .catch(error => reject(error))
            });
        }
    }
});
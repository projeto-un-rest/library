import { createStore } from "vuex";
import { SET_USER, LOGOUT_USER } from "./mutations";
import VuexPersistence from "vuex-persist";
import http from "@/http";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export const store = createStore({
    state: {
        user: {
            id: 0,
            cpf: "",
            name: "",
            rg: "",
            email: "",
            phone: "",
            createdAt: "",
            token: ""
        }
    },

    mutations: {
        [SET_USER](state, { id, cpf, name, rg, email, phone, createdAt, token }) {
            state.user.id = id;
            state.user.cpf = cpf;
            state.user.name = name;
            state.user.rg = rg;
            state.user.email = email;
            state.user.phone = phone;
            state.user.createdAt = createdAt;
            state.user.token = token
        },

        [LOGOUT_USER] (state) {
            state.user.id = 0,
            state.user.cpf = "",
            state.user.name = "",
            state.user.rg = "",
            state.user.email = "",
            state.user.phone = "",
            state.user.createdAt = "",
            state.user.token = ""
        }
    },

    actions: {
        signIn({ commit }, user) {
            return new Promise((resolve, reject) => {
                http.post("/api/user/authenticate", user)
                    .then(response => {
                        commit(SET_USER, {
                            id: response.data.id,
                            cpf: response.data.cpf,
                            name: response.data.name,
                            rg: response.data.rg,
                            email: response.data.email,
                            phone: response.data.phone,
                            createdAt: response.data.createdAt,
                            token: response.data.token
                        });
                        
                        resolve(response);
                    })
                    .catch(error => reject(error))
            });
        }
    },

    plugins: [vuexLocal.plugin]
});
<template>
    <header v-if="userIsLogged">
        <nav class="navbar navbar-background navbar-dark navbar-expand-xl">

            <div class="container">
                <a href="#" class="navbar-brand">
                    <h1>
                        <img class="header-logo" src="@/assets/logo.png" alt="Logo da Uninorte">
                    </h1>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Abrir Menu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'MyBooks' }">Meus Livros</router-link></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarUserOptions" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ this.store.state.user.name.split(" ")[0].toUpperCase() }}
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="navbarUserOptions">
                                <li><a class="dropdown-item" href="#" @click.prevent="logout">Sair</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    </header>
</template>

<script>
import { useStore } from "vuex";
import { LOGOUT_USER } from "@/store/mutations";

export default {
    name: "Header",
    computed: {
        userIsLogged() {
            return Boolean(this.store.state.user.token);
        }
    },

    methods: {
        logout() {
            this.store.commit(LOGOUT_USER);
            this.$router.push({ name: "Login" });
        }
    },

    setup() {
        const store = useStore();
        return {
            store
        }
    }
}
</script>

<style scoped>
.navbar-background {
    background-color: #32A027;
}

h1 {
    margin: 0;
}

.header-logo {
    width: 50px;
}

.navbar-dark .navbar-nav .nav-link {
    color: white;
}
</style>
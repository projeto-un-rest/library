<template>
    <div class="container">

        <div class="row">
            <div class="card-group col-12">
                <div class="card m-2" v-for="loan in loans" :key="loan.id">
                    <div class="card-body">

                        <div class="d-flex flex-column">
                            <h3 class="text-center">{{ loan.book.title }}</h3>
                            <p>Data de Empréstimo: {{ formatDate(loan.dt_load) }}</p>
                            <p v-if="alreadyWithdrawal(loan)">Data de Devolução: {{ formatDate(loan.dt_devolution) }}</p>
                            <p>Status: <strong>{{ loan.status }}</strong></p>
                            <img :src="getImageURL(loan.book)" class="book-image" alt="Imagem do Livro">
                            
                            <button class="btn btn-success mt-3" @click="renovate(loan)" v-if="alreadyWithdrawal(loan)">Renovar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import http from "@/http";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

export default {
    name: "MyBooks",
    data() {
        return {
            loans: []
        }
    },

    mounted() {
        this.loadLoans();
    },

    methods: {
        loadLoans() {
            http.get(`/api/loan/${ this.store.state.user.id }`)
                .then(response => this.loans = response.data.loads)
                .catch(() => this.toast.error("Não foi possível carregar os livros"))
        },

        renovate(loan) {
            http.post(`/api/loan/renovate/${ loan.id }`)
                .then(() => {
                    this.toast.success("Empréstimo renovado com sucesso");
                    this.loadLoans();
                })
                .catch((error) => {
                    this.toast.error("Erro ao renovar empréstimo");
                    console.log(error);
                })
        },

        getImageURL(book) {
            return process.env.VUE_APP_API + book.image_path;
        },

        formatDate(date) {
            return date.substring(0, 10).split("-").reverse().join("/");
        },

        alreadyWithdrawal(loan) {
            return loan.dt_withdrawal != null;
        }
    },

    setup() {
        const store = useStore();
        const toast = useToast();

        return {
            store,
            toast
        }
    }
}
</script>

<style scoped>
.row .card-group > .card {
    flex: initial;
}

.book-image {
    width: 100px;
    margin: 8px auto;
}

.card-group > .card + .card {
    border-left: 1px solid rgba(0, 0, 0, 0.175);
}

p {
    margin: 6px;
}
</style>
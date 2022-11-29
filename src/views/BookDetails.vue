<template>
    <div class="container">

        <div class="box row align-items-center">
            <div class="col-md-6">
                <img :src="getImageURL()" alt="Imagem do Livro">
            </div>

            <div class="col-md-6">
                <h2>{{ this.book.title }}</h2>
                <p>{{ this.book.subject }}</p>
                <p>Livros Disponíveis: {{ this.book.copies }}</p>

                <button class="btn btn-success" @click="reserve">Reservar</button>
            </div>
        </div>

    </div>
</template>

<script>
import http from "@/http";
import { useToast } from "vue-toastification";
import { useStore } from 'vuex';

export default {
    name: "BookDetails",
    data() {
        return {
            book: {
                id: 0,
                title: "",
                publisher: "",
                edition: "",
                authors: "",
                image_path: "",
                subject: "",
                launch: "",
                copies: 0
            }
        }
    },

    mounted() {
        http.get(`/api/book/${ this.$route.params.id }`)
            .then(response => {
                const data = response.data;

                this.book.id = data.id;
                this.book.title = data.title;
                this.book.publisher = data.publisher;
                this.book.edition = data.edition;
                this.book.authors = data.authors;
                this.book.image_path = data.image_path;
                this.book.subject = data.subject;
                this.book.launch = data.launch;
                this.book.copies = data.copies;

            })
            .catch(() => this.toast.error("Ocorreu um erro ao exibir o livro"))
    },

    methods: {
        getImageURL() {
            return process.env.VUE_APP_API + this.book.image_path;
        },

        reserve() {
            const loan = {
                idBook: this.book.id,
                idUser: this.store.state.user.id
            }

            http.post("/api/loan", loan)
                .then(() => this.toast.success("Livro reservado com sucesso"))
                .catch(() => this.toast.error("Não foi possível reservar o livro"))
        }
    },

    setup() {
        const toast = useToast();
        const store = useStore();

        return {
            toast,
            store
        }
    }
}
</script>

<style scoped>
.box {
    height: calc(100vh - 15vh);
}
</style>
<template>
    <div class="container">

        <div class="d-flex my-4">
            <div class="box-input input-group">
                <i class="d-flex input-group-text fa-solid fa-magnifying-glass"></i>
                <input type="text" class="form-control" placeholder="Digite o nome do livro" v-model="filter">
            </div>

            <button @click="searchBooks" class="btn btn-success ms-2">Pesquisar</button>
        </div>

        <div class="d-flex justify-content-between align-items-center">
            <h2>Livros Disponíveis</h2>
            <span>Livros encontrados: {{ this.pagingData.totalItems }}</span>
        </div>

        <div class="row mt-4">
            <div class="card-group col-12">
                <div class="card col-md-4 m-2" v-for="book in books" :key="book.id">
                    <div class="card-body">

                        <div class="d-flex flex-column">
                            <h3>{{ book.title }}</h3>
                            <img :src="getImageURL(book)" class="book-image" alt="Imagem do Livro">
                            <div class="d-grid mt-2">
                                <router-link class="btn btn-more-details btn-success" :to="{ name: 'BookDetails', params: { 'id': book.id } }">Mais Detalhes</router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Pagination :totalPages="pagingData.totalPages" @onSelectPage="selectPage" />
    </div>
</template>

<script>
import http from "@/http";
import { useToast } from "vue-toastification";

import Pagination from "@/components/Pagination.vue";

export default {
    name: "Home",
    components: {
        Pagination
    },
    data() {
        return {
            books: [],
            pagingData: {
                totalItems: 0,
                totalPages: 0
            },

            filter: "",
            size: 10,
            page: 0
        }
    },

    mounted() {
        this.loadBooks();
    },

    methods: {
        loadBooks() {
            http.get(`/api/book?title=${this.filter}&&size=${this.size}&&page=${this.page}`)
                .then(response => {
                    this.books = response.data.books;
                    
                    this.pagingData.totalItems = response.data.totalItems;
                    this.pagingData.totalPages = response.data.totalPages;
                })
                .catch(() => this.toast.error("Não foi possível carregar os livros"))
        },

        selectPage(page) {
            this.page = page - 1;
            this.loadBooks();
        },

        getImageURL(book) {
            return process.env.VUE_APP_API + book.image_path;
        },

        searchBooks() {
            this.loadBooks();
            this.title = "";
        }
    },

    setup() {
        const toast = useToast();
        return {
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
    margin: 0 auto;
}

.box-input {
    width: 50%;
}

.btn-more-details {
    position: relative;
    bottom: 0;
}

.card-group > .card + .card {
    border-left: 1px solid rgba(0, 0, 0, 0.175);
}

@media (min-width: 576px) {
    .row > .card-group {
        display: flex;
        flex-flow: initial;
    }
}

@media (max-width: 940px) {
    .box-input {
        width: 80%;
    }
}
</style>
<template>
    <nav>
        <ul class="pagination">
            <li class="page-item"><a @click="previus" class="page-link">Voltar</a></li>
            <li v-for="(page, index) in totalPages" :key="index" class="page-item" :class="isActive(page)"><a @click="selectPage(page)" class="page-link">{{ page }}</a></li>
            <li class="page-item"><a @click="next" class="page-link">Avançar</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    emits: ["onSelectPage"],
    data() {
        return {
            currentPage: 1
        }
    },

    props: {
        totalPages: {
            type: Number,
            required: true
        }
    },

    methods: {
        previus() {
            if(this.currentPage > 1) {
                this.paginaAtual -= 1;
            }
            this.$emit("onSelectPage", this.currentPage);
        },

        next() {
            if(this.currentPage < this.totalPages) {
                this.currentPage += 1;
            }
            this.$emit("onSelectPage", this.currentPage);
        },

        selectPage(page) {
            this.currentPage = page;
            this.$emit("onSelectPage", this.currentPage);
        },

        isActive(page) {
            const isActive = page === this.currentPage ? "active" : "";
            return isActive;
        }
    }
}
</script>

<style scoped>
.pagination {
    cursor: pointer;
}
</style>
<template>
  <div>
    <h1>Produtos</h1>

    <p v-if="loading">Carregando...</p>

    <div v-else>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div>
      <button @click="prevPage" :disabled="page === 1">← Anterior</button>
      <span>Página {{ page }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page === totalPages">Próximo →</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProducts } from '../composables/useProducts';
import ProductCard from './productCard.vue';
const { products, page, loading, totalPages, fetchProducts, nextPage, prevPage } = useProducts()

onMounted(() => {
  fetchProducts()
})
</script>
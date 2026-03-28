<template>
  <div class="bg-white rounded-xl w-80">
    <img :src="product.thumbnail" :alt="product.title" />
    <h2 class="text-1xl text-black">{{ product.title }}</h2>
    <p>{{ product.category }}</p>
    <span>R$ {{ product.price.toFixed(2) }}</span>
    <span>⭐ {{ product.rating }}</span>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
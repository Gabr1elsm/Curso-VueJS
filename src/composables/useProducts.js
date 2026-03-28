import { ref, computed } from "vue"
import { getProducts } from "./productServices"

export function useProducts() {
  const products  = ref([])    // lista de produtos
  const total     = ref(0)     // total de registros na API
  const page      = ref(1)     // página atual
  const limit     = ref(10)    // itens por página
  const loading   = ref(false)

  // Calcula o total de páginas automaticamente
  const totalPages = computed(() =>
    Math.ceil(total.value / limit.value)
  )

  // Busca os produtos da API
  async function fetchProducts() {
    loading.value = true
    const data = await getProducts(page.value, limit.value)
    products.value = data.products
    total.value    = data.total
    loading.value  = false
  }

  function nextPage() {
    if (page.value < totalPages.value) {
      page.value++
      fetchProducts()
    }
  }

  function prevPage() {
    if (page.value > 1) {
      page.value--
      fetchProducts()
    }
  }

  return {
    products,
    total,
    page,
    limit,
    loading,
    totalPages,
    fetchProducts,
    nextPage,
    prevPage,
  }
}
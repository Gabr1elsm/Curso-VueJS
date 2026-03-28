import axios from 'axios'

const BASE_URL = 'https://dummyjson.com'

// Busca lista de produtos com paginação
export async function getProducts(page = 1, limit = 10) {
  const skip = (page - 1) * limit
  const { data } = await axios.get(`${BASE_URL}/products`, {
    params: { limit, skip }
  })
  return data // retorna: { products[], total, skip, limit }
}

// Busca produtos por termo de busca
export async function searchProducts(query) {
  const { data } = await axios.get(`${BASE_URL}/products/search`, {
    params: { q: query }
  })
  return data
}
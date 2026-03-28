import axios  from "axios";

const BASE_URL = 'https://dummy.json.com'

export async function getProducts(page = 1, limit = 10) {
    const skip = (page -1 ) * limit
    const {data} = await axios.get{`${BASE_URL}/products`,{
        params: {limit, skip}
    }}
    return data
}

export async function searchProducts(queary) {
    const{data} = await axios.get{''}
}
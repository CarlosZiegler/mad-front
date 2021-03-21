import axios from 'axios';

export async function getAllProducts() {
  const result = await axios.get('http://localhost:3000/product');
  return result.data;
}

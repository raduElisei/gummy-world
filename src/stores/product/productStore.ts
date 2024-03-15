import { ref } from 'vue';
import { useAppStore } from '../../stores/appStore';
import { defineStore } from 'pinia';


interface Product {
  id: number;
  denumire: string;
  stoc: number;
  pret: number;
}

interface Response {
  success: boolean;
  message: string;
  result: Product[];
}

export const useProductStore = defineStore('product', () => {
  const appStore = useAppStore();
  const response = ref<Response>({ success: false, message: '', result: [] });
  async function getProducts() {
    try {
      const rawResponse = await fetch(`${appStore.BASE_URL}/Product/GetAll`);
      const data = await rawResponse.json();
      response.value.result = data.result;
      response.value.message = data.message;
      response.value.success = data.success;
    } catch (error) {
      console.error('Error fetching products:', error);
      response.value.result = [];
      response.value.message = `Error fetching products: ${error}`;
      response.value.success = false;
    }
  }
  
  return { response, getProducts };
});

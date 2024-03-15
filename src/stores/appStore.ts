import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => {
    const BASE_URL = 'https://localhost:7230/api';
    return { BASE_URL };
  }
});

<template>

</template>
<script setup>



const selectedCategory = ref(null);

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return produits.value;
  return produits.value.filter(product => 
    product.categories.data.some(cat => cat.id === selectedCategory.value)
  );
});

const filterByCategory = (categoryId) =>{
  selectedCategory.value = categoryId;
};

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getProducts, getCategories, getProductBySlug } from '../services/api';

export const useProductStore = defineStore('product', () => {
  const products = ref([]);
  const categories = ref([]);
  const currentProduct = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await getProducts();
      products.value = response.data.data;
    } catch (err) {
      error.value = err?.message || 'Erreur lors du chargement des produits';
    } 
  };

  const fetchCategories = async () => {

    try {
      const response = await getCategories();
      categories.value = response.data;
    } catch (err) {
      console.log(err + 'Erreur lors du chargement des catégories');
    }
  };

  const fetchProductBySlug = async (slug) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await getProductBySlug(slug);
      currentProduct.value = response.data.data;
    } catch (err) {
      error.value = err?.message || 'Erreur lors du chargement du produit';
    } 
  };

  return {
    products,
    categories,
    currentProduct,
    loading,
    error,
    fetchProducts,
    fetchCategories,
    fetchProductBySlug
  };
});
</script>
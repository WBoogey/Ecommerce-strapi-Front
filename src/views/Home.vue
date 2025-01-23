<template>
  <CategoryBar :categories="categories" @changeCategory="handleCategoryChange" />
  <div v-if="filteredProducts.length > 0">
    <RouterLink 
      :to="`/productDetail/${produit.slug}`" 
      v-for="produit in filteredProducts" 
      :key="produit.id"
    >
      <ProduitCard
        :image="formattedImageUrl(produit.image?.url)"
        :description="produit.image?.caption"
        :key="produit.id"
      >
        <template #name>
          {{ produit.name }}
        </template>
        <template #description>
          {{ produit.description }}
        </template>
        <template #price>
          {{ produit.price }} euros
        </template>
      </ProduitCard>
    </RouterLink>
  </div>
  <p v-else>Aucun produit trouvé</p>
</template>

<script setup>
import { getAPI } from '../services/getApi';
import { onMounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import ProduitCard from '../components/ProduitCard.vue';
import CategoryBar from '../components/CategoryBar.vue';
import {formattedImageUrl} from '../utils/formtImage'

const produits = ref([]);
const categories = ref([]);
const selectedCategory = ref(null);


onMounted(() => {
  getProducts();
  getCategories();
});

const handleCategoryChange = (categoryName) => {
  console.log(selectedCategory.value)
  selectedCategory.value = categoryName;
};

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return produits.value;
  return produits.value.filter(product => 
    product.categories.some(cat => cat.name === selectedCategory.value)
  );
});


const getProducts = async () => {
  try {
    const result = await getAPI("produits", { 
      populate: {
        image: true,
        categories: true
      }
    });
    produits.value = result.data;
    console.log("Produits:", produits.value);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
  }
};

const getCategories = async () => {
  try {
    const response = await getAPI("product-categories");
    categories.value = response.data;
    console.log("Catégories:", categories.value);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
  }
};
</script>
<style  scoped>

</style>


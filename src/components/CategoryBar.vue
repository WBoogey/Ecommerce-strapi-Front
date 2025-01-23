<template>
  <div class="categories">
    <button @click="changeCategory(null)">Toutes les catégories</button>
    <router-link :class="{ 'selectedCategorie': selectedCategory === categorie.name }"   v-for="categorie in categories" :key="categorie.id" @click="changeCategory(categorie.name)" :to="`/category/${categorie.name}`" >
      <button>
      {{ categorie.name }}
    </button>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const selectedCategory = ref(null);

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['changeCategory']);

const changeCategory = (categoryName) => {
  selectedCategory.value = categoryName;
  console.log(categoryName)
  emit('changeCategory', categoryName);
};
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e0e0e0;
}

.selectedCategorie{

}
</style>


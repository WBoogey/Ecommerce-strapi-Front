<template>
  <v-container class="d-flex justify-center mt-5">
    <!-- Gestion du chargement -->
    <v-card v-if="produit" max-width="344" class="mx-auto">
      <!-- Image du produit -->
      <v-img
        :src="formattedImageUrl(produit.image?.url)"
        alt="Image du produit"
        aspect-ratio="16/9"
      ></v-img>

      <!-- Contenu de la Card -->
      <v-card-title>{{ produit.name }}</v-card-title>
      <v-card-text>
        <p>{{ produit.description }}</p>
        <p><strong>{{ produit.price }} euros</strong></p>
      </v-card-text>
    </v-card>
    <p v-else class="text-center">Chargement des données...</p>
  </v-container>
</template>

<script setup>

import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {getAPI} from '../services/getApi'           
import { onMounted } from 'vue';
import {formattedImageUrl} from '../utils/formtImage';
const route = useRoute()

const produit = ref([])

onMounted(()=>{
  getProductBySlug()
})

const getProductBySlug = async () => {
  try {
    
    const result = await getAPI(`produits/${route.params.slug}`)
    produit.value = result.data
    console.log(produit.value);
  } catch (error) {
    console.error("Error fetching products:", error)
  }
}
</script>
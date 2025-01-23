<template>
  <div v-if="produit">
    <img :src="formattedImageUrl(produit.image?.url)" alt="">
  </div>
  <div v-else>
    chargements...
  </div>
  <h3>
    {{produit.name}}
  </h3>
  <p>
    {{produit.description}}
  </p>
  <p>
    {{produit.price}}
  </p>
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
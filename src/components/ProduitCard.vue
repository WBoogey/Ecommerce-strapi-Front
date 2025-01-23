<template>
<div class="produit-card">
  <img :src="props?.image" :alt="props?.description">
  <h3>
    <slot name="name"></slot>
  </h3>
  <p>
    <slot name="description"></slot>
  </p>
  <p>
    <slot name="price"></slot>
  </p>
</div>
</template>
<script setup>

const props = defineProps({
  image : String,
  description : String
})

</script>
<style>
.produit-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}

img{
  width: 100px;
  height: 100px;
}
</style>
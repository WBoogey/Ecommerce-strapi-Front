<template>
  <v-card class="mx-auto my-3" max-width="344">
    <!-- Image du produit -->
    <v-img
      :src="props?.image"
      :alt="props?.description"
      aspect-ratio="16/9"
    ></v-img>

    <!-- Contenu de la Card -->
    <v-card-title>
      <slot name="name"></slot>
    </v-card-title>

    <v-card-text>
      <p>
        <slot name="description"></slot>
      </p>
      <p>
        <strong>
          <slot name="price"></slot>
        </strong>
      </p>
    </v-card-text>
  </v-card>
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
<template>
  <section class="layout">
    <ColorPanel class="color-item" v-for="color in redColors" :hex="color.hex" :name="color.name" :R="color.R" :G="color.G" :B="color.B" />
  </section>
</template>

<script setup>
import ColorPanel from './components/color-panel.vue';

import { redColors } from './util/const'; 
</script>

<style scoped>
.layout {
  padding: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80vw;;
}

.color-item {
  margin-right: 0.8rem;
}
</style>

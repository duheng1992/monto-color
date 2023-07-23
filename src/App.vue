<template>
  <section class="flex-between">
    <section class="color-layout">
      <ColorPanel class="color-item" v-for="color in redColors" :hex="color.hex" :name="color.name" :R="color.R" :G="color.G" :B="color.B" />
    </section>
    <ColorConvert />
  </section>
</template>

<script setup>
import ColorConvert from './components/color-convert.vue';
import ColorPanel from './components/color-panel.vue';

import { redColors } from './util/const'; 
</script>

<style scoped>
.flex-between {
  padding: 100px;
  display: flex;
  justify-content: space-between;
}

.color-layout {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80vw;;
}

.color-item {
  margin-right: 0.8rem;
  margin-bottom: 1rem;
}
</style>

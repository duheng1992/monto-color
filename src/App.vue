<template>
  <section class="flex-layout">
    <section>
      <h1 class="main-title">中式色卡</h1>
      {{ color }}
      <ColorConvert class="color-convert" />
    </section>
    <section>
      <h1 class="sub-title">红色系</h1>
      <section class="color-panel">
        <ColorPanel class="color-item" v-for="color in redColors" :hex="color.hex" :name="color.name" :R="color.R" :G="color.G" :B="color.B" :handleSelect="handleSelect" />
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ColorConvert from './components/color-convert.vue';
import ColorPanel from './components/color-panel.vue';

import { redColors } from './util/const';

const color = ref();

const handleSelect = hex => {
  color.value = hex;
}
</script>

<style scoped>

.flex-layout {
  display: flex;
  justify-content: space-between;
}

.main-title {
  font-size: 48px;
}

.sub-title {
  font-size: 24px;
}

.color-panel {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 70vw;;
}

.color-item {
  margin-right: 0.8rem;
  margin-bottom: 1rem;
}


@media screen and (min-width: 1000px) {
  .flex-layout {
    padding: 100px;
  }
}

@media screen and (max-width: 1000px) {
  .flex-layout {
    padding: 20px;
    flex-direction: column;
  }

  .color-convert {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .color-panel {
    width: 100vw;
  }
}
</style>

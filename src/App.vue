<template>
  <section class="flex-layout">
    <section class="left">
      <h1 class="main-title">中式色卡</h1>
      <p class="description">
        {{ color.hex }}
        {{ color.R }}
        {{ color.G }}
        {{ color.B }}
      </p>
      <ColorConvert class="color-convert" />
    </section>
    <section class="right">
      <h1 class="sub-title">
        {{ currentTab.name }}
        <select :onChange="handleSelectColor">
          <optgroup label="中式色卡">
            <option label="红色系" value="red">红色系</option>
            <option label="黄色系" value="yellow">黄色系</option>
          </optgroup>
        </select>
      </h1>
      <section class="color-panel">
        <ColorPanel class="color-item" v-for="color in currentTab.value" :hex="color.hex" :name="color.name" :R="color.R"
          :G="color.G" :B="color.B" :handleSelect="() => handleSelect(color.hex, color.R, color.G, color.B)" />
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ColorConvert from './components/color-convert.vue';
import ColorPanel from './components/color-panel.vue';

import { redColors, yellowColors } from './util/const';

const colorList = [
  { name: '红色系', key: 'red', value: redColors },
  { name: '黄色系', key: 'yellow', value: yellowColors },
];

const currentTab = ref(colorList[0]);
const color = ref({});

const handleSelect = (hex, R, G, B) => {
  color.value = { hex, R, G, B };
}

const handleSelectColor = color => {
  const selectedKey = color.target.value;
  currentTab.value = colorList.find(color => color.key === selectedKey);
}
</script>

<style scoped>
.flex-layout {
  display: flex;
  justify-content: space-between;
}

.left {
  min-width: 500px;
  max-width: 500px;
  margin-right: 50px;
  font-weight: 800;
}

.right {
  flex: 1;
}

.main-title {
  font-size: 48px;
  font-weight: bolder;
}

.sub-title {
  display: flex;
  align-items: center;
  font-size: 24px;
}

.color-panel {
  display: flex;
  flex-wrap: wrap;
}

.color-item {
  margin-right: 0.8rem;
  margin-bottom: 1rem;
}

/* ::v-slots {

} */

select {
  margin-left: 12px;
}

@media screen and (min-width: 1000px) {
  .flex-layout {
    padding: 100px 50px 100px 50px;
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
  .left {
    min-width: unset;
    max-width: unset;
  }
}
</style>

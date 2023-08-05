<template>
    <section class="convert-panel" :style="{ backgroundColor: `${getContrastColor(hex)}` }">
        <input type="number" class="short-input mr-4" v-model="r" placeholder="r" min="0" max="255" />
        <input type="number" class="short-input mr-4" v-model="g" placeholder="g" min="0" max="255" />
        <input type="number" class="short-input mr-4" v-model="b" placeholder="b" min="0" max="255" />
        <button class="button" @click="() => handleRgb(r, g, b)">RGB 转 HEX</button>
        <input type="text" v-model="hex" />
        <button class="button" @click="() => handleHex(hex)">HEX 转 RGB</button>

        <p>{{ result }}</p>
    </section>
</template>
  
<script setup>
import { ref } from 'vue';
import { getContrastColor, hexToRgb, rgbToHex } from '../util';

const r = ref(0);
const g = ref(0);
const b = ref(0);
const hex = ref('#000000');
const result = ref('');

const handleHex = (hex) => {
    const { r: R, g: G, b: B } = hexToRgb(hex);
    result.value = `rgb(${R}, ${G}, ${B})`
}

const handleRgb = (r, g, b) => {
    result.value = rgbToHex(r, g, b);
}

</script>
  
<style scoped>
.convert-panel {
    padding: 36px;
    backdrop-filter: blur(20px);
    opacity: 0.8;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.822); /* 添加白色投影效果 */
}
.short-input {
    width: 50px;
}

.button {
    display: block;
    margin: 12px 0;
}
</style>
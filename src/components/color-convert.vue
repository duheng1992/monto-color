<template>
    <section>
        <input type="number" class="short-input" v-model="r" />
        <input type="number" class="short-input" v-model="g" />
        <input type="number" class="short-input" v-model="b" />
        <button @click="rgbToHex">RGB to HEX</button>
        <input type="text" v-model="hex" />
        <button @click="hexToRgb">HEX to RGB</button>

        <p>{{ result }}</p>
    </section>
</template>
  
<script setup>
import { ref } from 'vue';

const r = ref('');
const g = ref('');
const b = ref('');
const hex = ref('');
const result = ref('');

const rgbToHex = () => {
    const componentToHex = (c) => {
        const thex = c.toString(16);
        return thex.length === 1 ? "0" + thex : thex;
    };

    const red = componentToHex(r.value).toUpperCase();
    const green = componentToHex(g.value).toUpperCase();
    const blue = componentToHex(b.value).toUpperCase();

    if (red && green && blue) {
        result.value = "#" + red + green + blue;
    }
}

const hexToRgb = () => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const thex = hex.value.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const tresult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(thex);
    if (tresult && tresult.length > 3) {
        result.value = `rgb(${parseInt(tresult[1], 16)}, ${parseInt(tresult[2], 16)}, ${parseInt(tresult[3], 16)})`
    }
}
</script>
  
<style scoped>
.short-input {
    width: 50px;
}
</style>
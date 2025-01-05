<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <main>
    <div>
      <h4>The Current Count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </main>
</template>


<style >
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
}
</style>


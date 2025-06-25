<script setup>
import { ref } from 'vue'

const someText = ref('')

const handleSubmit = () => {
  console.log('submit ==>', {
    someText: someText.value,
  })
}
</script>

<template>
  <main>
    <h1>Page d'accueil</h1>
    <h2>Enter a text</h2>
    <form @submit.prevent="handleSubmit">
      <label for="someText"></label
      ><input type="text" name="someText" id="someText" v-model="someText" />
      <button>Save text in cookie</button>
      <button>Get cookie</button>
      <button>Delete cookie</button>
      <p>No cookie saved !</p>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  input,
  button {
    padding: 10px;
  }
}
</style>

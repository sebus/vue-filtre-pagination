<script setup>
import { ref } from 'vue'

const text = ref('')
const cookieValue = ref(null)

const saveText = () => {
  $cookies.set('zeCookie', text.value)
  text.value = ''
}

const getCookie = () => {
  const textFromCookie = $cookies.get('zeCookie')
  if (!textFromCookie) {
    alert('No cookie')
  } else {
    cookieValue.value = textFromCookie
  }
}

const deleteCookie = () => {
  $cookies.remove('zeCookie')
  text.value = ''
  cookieValue.value = null
}
</script>

<template>
  <main>
    <h1>Enter the text</h1>
    <div>
      <input type="text" name="text" id="text" v-model="text" />
      <button @click="saveText">Save text in cookie</button>
      <button @click="getCookie">Get cookie</button>
      <button @click="deleteCookie">Delete cookie</button>
      <p v-if="!cookieValue">No cookie saved !</p>
      <p v-else>Yeah cookie ! {{ cookieValue }}</p>
    </div>
  </main>
</template>

<style scoped>
div {
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

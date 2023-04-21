<script setup>
defineProps({
  greetings: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="green">{{ greetings }}</h1>
  </div>
</template>

<style scoped>
</style>

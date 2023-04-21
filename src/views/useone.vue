<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast }
  },

  methods: {
    triggerToast() {
      this.toast("I'm an info toast!");
    }
  }
}
</script>

<template>
  <div>
    <button @click="triggerToast" class="green-button">
      See a notification
    </button>
  </div>
</template>

<style>
</style>

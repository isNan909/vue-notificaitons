<script>
import { useToast } from 'vue-toast-notification';

export default {
  setup(){
    const toast = useToast();
    return {toast}
  },
  methods: {
    triggerToast(){
      this.toast.success('You did it!');
    }
  }
}
</script>

<template>
  <div>
    <button class="green-button" @click="triggerToast">
      See a notification
    </button>
  </div>
</template>

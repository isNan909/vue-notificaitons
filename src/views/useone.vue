<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast }
  },

  methods: {
    triggerToast() {
      this.toast("I'm an info toast!", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: "fas fa-rocket",
        rtl: false
      });
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

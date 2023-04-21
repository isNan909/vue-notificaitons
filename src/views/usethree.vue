<script>
  export default{
    methods: {
      triggerToast(){
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
          title: 'Hi from Sweetalert',
          text: 'Have a good day ahead!',
          showCancelButton: 'true'
        });
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

<style>
</style>

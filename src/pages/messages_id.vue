<template>
  <q-page class="flex flex-center" padding>
    message id {{ $route.params.id }}</q-page
  >
</template>

<script>
export default {
  name: "Messages_idPage",
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

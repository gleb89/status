<template>
  <q-page class="relative-position">
    <StatusCard />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import StatusCard from "components/StatusCard.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    StatusCard,
  },
});
</script>

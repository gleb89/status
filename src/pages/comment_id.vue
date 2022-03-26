<template>

      <q-page class="relative-position">
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
<CommentsList/>
</transition-group>
  </q-page>
</template>

<script>
import CommentsList from "components/CommentsList.vue";
export default {
name:"ComentsPage",
components:{
    CommentsList
  },
  setup() {

  },
}
</script>

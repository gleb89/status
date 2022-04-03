<template>

      <q-page class="relative-position">
ghghgh
  </q-page>
</template>

<script setup>
import CommentsList from "components/CommentsList.vue";
import { ref, onMounted } from "vue";
import { GetOneComment } from "../use/Fetchcomments";
import { useRouter, useRoute } from "vue-router";
const comment = ref({});
const router = useRouter();
const route = useRoute();
const OnLikeComments = async (pk) => {
  if (comment.value.likes) {
    comment.value.likes = 0;
  } else {
    comment.value.likes = 1;
  }
};


// onMounted(async () => {
//   const response_comment = await GetOneComment(route.params.comment_id);
//   // comment.value = response_comment.comment;
// });
</script>

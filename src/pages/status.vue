<template>
  <q-page padding class="relative-position">
    <StatusCard
      :qweet="qweet"
      :index="index"
      :OnLike="OnLikeStatus"
      :deleteQweet="deleteQweet"
    />

    <q-separator />
    <section id="comments">
      <h6 class="q-ml-md">Комментарии (76)</h6>
      <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow"
      >
        <div v-for="(comment, index) in comments.results" :key="index">
          <CommentsList :comment="comment" :OnLike="OnLikeComments" :index="index" />
        </div>
      </transition-group>
    </section>
  </q-page>
</template>

<script setup>
import CommentsList from "components/CommentsList.vue";
import StatusCard from "components/StatusCard.vue";
import { ref, onMounted } from "vue";
import { GetOneStatus } from "../use/Fetchtstatus";
import { GetListComments } from "../use/Fetchcomments";
import { useRouter, useRoute } from "vue-router";
const qweet = ref({});
const comments = ref([]);
const router = useRouter();
const route = useRoute();
const OnLikeStatus = async (pk) => {
  if (qweet.value.likes) {
    qweet.value.likes = 0;
  } else {
    qweet.value.likes = 1;
  }
};

const OnLikeComments = async (ind) => {
  if (comments.value.results[ind].likes) {
    comments.value.results[ind].likes = 0;
  } else {
    comments.value.results[ind].likes = 1;
  }
};
onMounted(async () => {
  const response_status = await GetOneStatus(route.params.status_id);
  qweet.value = response_status.status;
  const response_comments = await GetListComments(route.params.status_id);
  comments.value = response_comments.commenstList;
});
</script>



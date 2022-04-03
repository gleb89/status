<template>
  <q-page class="relative-position">
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
      <div v-for="(qweet, index) in qweets.results" :key="index">
        <StatusCard
          :qweet="qweet"
          :index="1"
          :OnLike="OnLike"
          :deleteQweet="deleteQweet"
        />
      </div>
    </transition-group>
  </q-page>
</template>



<script setup>
import StatusCard from "components/StatusCard.vue";
import { ref, onMounted } from "vue";
import { GetListStatus } from "../use/Fetchtstatus";
const qweets = ref([]);
const OnLike = async (ind) => {
  if (qweets.value.results[ind].likes) {
    qweets.value.results[ind].likes = 0;
  } else {
    qweets.value.results[ind].likes = 1;
  }
};
onMounted(async () => {
  const response = await GetListStatus();
  qweets.value = response.statusList;
});
</script>


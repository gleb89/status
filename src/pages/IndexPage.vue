<template>
  <q-page class="relative-position">
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
      <div v-for="(qweet, index) in qweets" :key="index">
        <StatusCard :qweet="qweet" :index="index" :OnLike="OnLike" :deleteQweet="deleteQweet" />
      </div>
    </transition-group>
  </q-page>
</template>





<script>
import { defineComponent } from "vue";
import StatusCard from "components/StatusCard.vue";
import { ref } from "vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    StatusCard,
  },
  setup() {
    const qweets = ref([
      {
        id: 1,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: "1",
      },
      {
        id: 2,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: "1",
      },
      {
        id: 3,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: "1",
      },
      {
        id: 4,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: "1",
      },
      {
        id: 5,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: 0,
      },
      {
        id: 6,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: "1",
      },
      {
        id: 7,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: 0,
      },
    ]);
    return {
      qweets,
      deleteQweet(ind){
        qweets.value.slice(ind,1)
      },
      OnLike(ind) {

      if (qweets.value[ind].liked) {
        qweets.value[ind].liked = 0;
      } else {
        qweets.value[ind].liked = 1;
      }
      },
    };
  },
});
</script>

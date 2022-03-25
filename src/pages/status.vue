<template>
  <q-page padding class="relative-position">
    <q-item clickable v-ripple class="qweet q-py-md">


      <q-item-section>
        <q-item-label class="text-subtitle1">
          <q-avatar size="md">
            <img
              src="https://s.gravatar.com/avatar/ce7f3697e231df38b3ca6065848520da?s=80"
            />
          </q-avatar>
          <strong>
            <span> Danny Connell </span>
            <br />
            <span class="text-grey-5 q-ml-lg"> @danny__connell </span>
          </strong>
        </q-item-label>
        <q-item-label  @click="OnPAge('/status/'+qweet.id)" class="qweet-content text-body1 q-pt-md">{{
          qweet.content
        }}</q-item-label>
        <span class="text-grey-7  q-mt-md">
          &bull; 12.11.2022
        </span>

        <div class="qweet-icons row justify-between q-mt-sm">
          <q-btn @click="OnPAge('/comments/' + 1)" color="grey" icon="chat_bubble_outline" size="sm" flat round >66

    </q-btn>
          <q-btn color="grey" icon="keyboard_return" size="sm" flat round >13

    </q-btn>
          <q-btn
          @click="OnLike(index)"
            :color="qweet.liked ? 'pink' : 'grey'"
            :icon="qweet.liked ? 'favorite_border' : 'favorite_border'"
            size="sm"
            flat

            round
          >
        45

    </q-btn>

        </div>
      </q-item-section>
    </q-item>
     <q-separator />
     <section id="comments">
       <h6 class="q-ml-md">Комментарии (76)</h6>
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >

      <div v-for="(i, index) in 10" :key="index">

<CommentsList/>
      </div>
    </transition-group>
     </section>
  </q-page>
</template>

<script>
import { ref } from "vue";
import CommentsList from "components/CommentsList.vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "StatusPage",
  components: {
    CommentsList
  },
   setup() {
    const dialog = ref(false)
     const info = ref(null)
    const router = useRouter();
    const route = useRoute();
    const qweet = ref({
        id: 1,
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        liked: 1,
      })
    return {
     qweet,
     OnLike(){
       if(qweet.value.liked){
         qweet.value.liked = 0
       }else{
         qweet.value.liked = 1
       }

     }

    };
  },
};
</script>

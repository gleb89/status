<template>
  <q-item clickable v-ripple class="qweet q-py-md">

    <q-item-section avatar top>
      <q-avatar size="md">
  <img v-if="comment.user_avatar" :src="comment.user_avatar" alt="none" />
            <img
              v-else
              src="https://s.gravatar.com/avatar/ce7f3697e231df38b3ca6065848520da?s=80"
            />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        <strong>{{comment.user_first_name}} {{comment.user_last_name}} </strong>
        <span class="text-grey-7 q-ml-md">
          {{comment.user_nicname}}
          <br class="lt-xl" />
        </span>
      </q-item-label>
      <q-item-label class="qweet-content text-body1 q-pt-md">

        {{comment.text_comment}}
      </q-item-label>
      <span class="text-grey-7 q-mt-md"> &bull; {{convertFromStringToDate(comment.updated)}} </span>

      <div class="qweet-icons row justify-between q-mt-sm">
        <q-btn @click="OnPAge('/status/comment/1')" color="grey" icon="chat_bubble_outline" size="sm" flat round
          >{{comment.children.length}}
        </q-btn>

          <q-btn
            @click="OnLike(index,)"
            :color="comment.likes ? 'pink' : 'grey'"
            :icon="comment.likes ? 'favorite_border' : 'favorite_border'"
            size="sm"
            flat
            round
          >
            {{comment.likes}}
          </q-btn>
       <q-btn @click="deleteQweet(index)" color="grey" icon="delete_outline" size="sm" flat round />
      </div>
    </q-item-section>
  </q-item>
  <q-separator />
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  props: ["comment", "index", "OnLike"],
  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      convertFromStringToDate(responseDate) {
        if (responseDate) {
          return new Date(responseDate).toLocaleString("ru");
        } else {
          return "";
        }
      },
      OnPAge(url) {
        router.push({ path: url });
      },
    };
  },
};
</script>

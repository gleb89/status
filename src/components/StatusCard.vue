<template>
  <q-list>
    <q-item clickable v-ripple class="qweet q-py-md">
      <q-item-section avatar top>
        <q-avatar size="md">
          <img
            src="https://s.gravatar.com/avatar/ce7f3697e231df38b3ca6065848520da?s=80"
          />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label  @click="OnPAge('/status/'+qweet.id)" class="text-subtitle1">
          <strong>Danny Connell</strong>
          <span class="text-grey-7">
            @danny__connell
            <br class="lt-md" />&bull; 12.11.2022
          </span>
        </q-item-label>
        <q-item-label  @click="OnPAge('/status/'+qweet.id)" class="qweet-content text-body1">{{
          qweet.content
        }}</q-item-label>
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
          <!-- <q-btn @click="deleteQweet(index)" color="grey" icon="delete_outline" size="sm" flat round /> -->
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  props: ["index", "qweet","OnLike","deleteQweet"],
  name: "StatusCard",

  setup() {
    const dialog = ref(false)
     const info = ref(null)
    const router = useRouter();
    const route = useRoute();
    return {
      info,
      dialog,
      maximizedToggle: ref(true),
      OnPAge(url){
        router.push({ path: url });
      },
      handleSwipe ({ evt, ...newInfo }) {
      //
       if(newInfo.distance.y > 90){
         dialog.value = false
       }
      }
    };
  },
});
</script>
<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>

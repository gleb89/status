<template>
  <q-list>
    <q-item clickable v-ripple class="qweet q-py-md">
      <q-item-section>
        <q-item-label class="text-subtitle1">
          <q-avatar size="md">
            <img v-if="qweet.user_avatar" :src="qweet.user_avatar" alt="none" />
            <img
              v-else
              src="https://s.gravatar.com/avatar/ce7f3697e231df38b3ca6065848520da?s=80"
            />
          </q-avatar>
          <strong>
            <span> {{qweet.user_first_name}} {{qweet.user_last_name}} </span>
            <br />
            <span class="text-grey-5 q-ml-lg">{{qweet.user_nicname}} </span>
          </strong>
        </q-item-label>
        <q-item-label
          @click="OnPAge('/status/' + qweet.id)"
          class="qweet-content text-body1 q-pt-md"
          >{{ qweet.descriptions }}</q-item-label
        >
        <span class="text-grey-7 q-mt-md"> &bull; {{convertFromStringToDate(qweet.updated)}} </span>

        <div class="qweet-icons row justify-between q-mt-sm">
          <q-btn
            @click="OnPAge('/comments/' + 1)"
            color="grey"
            icon="chat_bubble_outline"
            size="sm"
            flat
            round
            >{{qweet.comments}}
          </q-btn>
          <q-btn color="grey" icon="keyboard_return" size="sm" flat round
            >13
          </q-btn>
          <q-btn
            @click="OnLike(index,)"
            :color="qweet.likes ? 'pink' : 'grey'"
            :icon="qweet.likes ? 'favorite_border' : 'favorite_border'"
            size="sm"
            flat
            round
          >
            {{qweet.likes}}
          </q-btn>
          <!-- <q-btn @click="deleteQweet(index)" color="grey" icon="delete_outline" size="sm" flat round /> -->
        </div>
      </q-item-section>
    </q-item>
    <q-separator />
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { date } from 'quasar'
export default defineComponent({
  props: ["index", "qweet", "OnLike", "deleteQweet"],
  name: "StatusCard",

  setup() {
    const dialog = ref(false);
    const info = ref(null);
    const router = useRouter();
    const route = useRoute();
    return {
      info,
      dialog,
      maximizedToggle: ref(true),
    convertFromStringToDate(responseDate) {
      if (responseDate) {

        return  new Date(responseDate).toLocaleString("ru");
      } else {
        return "";
      }
    },
      OnPAge(url) {
        router.push({ path: url });
      },
      handleSwipe({ evt, ...newInfo }) {
        //
        if (newInfo.distance.y > 90) {
          dialog.value = false;
        }
      },
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

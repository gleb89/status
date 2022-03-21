<template>
  <q-list>
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
      <q-item
        v-for="(qweet, index) in qweets"
        :key="index"
        class="qweet q-py-md"
      >
        <q-item-section avatar top>
          <q-avatar size="md">
            <img
              src="https://s.gravatar.com/avatar/ce7f3697e231df38b3ca6065848520da?s=80"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Danny Connell</strong>
            <span class="text-grey-7">
              @danny__connell
              <br class="lt-md" />&bull; 12.11.2022
            </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">{{
            qweet.content
          }}</q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn
              color="grey"
              icon="chat_bubble_outline"
              size="sm"
              flat
              round
            />
            <q-btn color="grey" icon="keyboard_return" size="sm" flat round />
            <q-btn
              @click="OnLike(index)"
              :color="qweet.liked ? 'pink' : 'grey'"
              :icon="qweet.liked ? 'favorite_border' : 'favorite_border'"
              size="sm"
              flat
              round
            />
            <q-btn color="grey" icon="delete_outline" size="sm" flat round />
          </div>
        </q-item-section>
      </q-item>
    </transition-group>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "StatusCard",
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
      OnLike(ind) {
        console.log(ind);
        if (this.qweets[ind].liked) {
          this.qweets[ind].liked = 0;
        } else {
          this.qweets[ind].liked = 1;
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

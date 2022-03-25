<template>

    <q-item clickable v-ripple class="qweet q-py-md">
      <q-item-section avatar top>
        <q-avatar size="md">
          <img
            src="https://s.gravatar.com/avatar/ce7f3697e231df38b3ca6065848520da?s=80"
          />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label  class="text-subtitle1">
          <strong>Danny Connell</strong>
          <span class="text-grey-7">
            @danny__connell
            <br class="lt-xl" />
          </span>
        </q-item-label>
        <q-item-label   class="qweet-content text-body1 q-pt-md">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        </q-item-label>
        <span class="text-grey-7  q-mt-md">
          &bull; 12.11.2022
        </span>

        <div class="qweet-icons row justify-between q-mt-sm">
          <q-btn  color="grey" icon="chat_bubble_outline" size="sm" flat round >66

    </q-btn>

          <q-btn

            :color="1 ? 'pink' : 'grey'"
            :icon="1 ? 'favorite_border' : 'favorite_border'"
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
     <q-separator />

</template>

<script>
export default {

  setup() {
    return {

    };
  },
};
</script>

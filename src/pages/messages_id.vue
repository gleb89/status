<template>
  <q-page class="flex" padding>
     <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['doing fine, how r you?']"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['doing fine, how r you?']"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['doing fine, how r you?']"
      />
    </div>

      <q-input class="fixed-bottom q-mb-lg q-pl-md q-pr-md"  style="width:100%" bottom-slots v-model="textmessage" label="Label" >
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>



        <template v-slot:after>
          <q-btn color="green" round dense flat icon="send" />
        </template>
      </q-input>

    </q-page
  >
</template>

<script>
import { ref } from "vue";
export default {
  name: "Messages_idPage",
  // mounted() {
  //   console.log(this.$route.params.id);
  // },
  setup(){
    const textmessage = ref('')
    return{
      textmessage
    }
  }
};
</script>

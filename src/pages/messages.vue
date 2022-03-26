<template>
  <q-page class="flex " padding>
  <q-list  class="rounded-borders" style="">
      <q-item-label header>Чаты</q-item-label>
      <div v-for="i in 4" :key="i.id">


      <q-item @click="OnPage('/messages_id/1')"   clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-separator inset="item" />
</div>
      <!-- <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item> -->
    </q-list>
     </q-page>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  name: "MessagesPage",
  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      OnPage(url){
        router.push({ path: url });
      }
    };
  },
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="OnRoute" reveal class="bg-white text-black">
      <q-toolbar>
        <q-icon @click="$router.go(-1)" size="23px" name="farrow_back" />
        <div style="width: 100%" class="text-center">
          <img
            @click="onPage('/')"
            class="q-mr-md"
            alt="logo"
            src="images/logo.svg"
            style="width: 33px; height: 33px"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-header v-else reveal class="bg-white text-black">
      <q-toolbar>
        <q-avatar size="23px" @click="toggleLeftDrawer">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          />
        </q-avatar>
        <div style="width: 100%" class="text-center">
          <img
            @click="onPage('/')"
            class="q-mr-md"
            alt="logo"
            src="images/logo.svg"
            style="width: 33px; height: 33px"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-item-section class="q-py-md q-ml-md">
        <q-avatar size="32px">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            alt="twitter_icon"
          />
        </q-avatar>
        <p>@glebhleb89</p>
        <div class="row">
          <div @click="onPage('/readable')">
            <span class="text-weight-bold">86</span> читаемых
          </div>
          <div @click="onPage('/readers')" class="q-ml-md">
            <span class="text-weight-bold">12</span> читателей
          </div>
        </div>
      </q-item-section>
      <q-list class="nav-left">
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="sm" />
          </q-item-section>
          <q-item-section class="text-h6">Главная</q-item-section>
        </q-item>
        <q-item to="/profile" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person" size="sm" />
          </q-item-section>
          <q-item-section class="text-h6">Профиль</q-item-section>
        </q-item>

        <q-item to="/bookmarks" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="bookmark_border" size="sm" />
          </q-item-section>
          <q-item-section class="text-h6">Избранное</q-item-section>
        </q-item>

        <q-item to="/recommendation" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list_alt" size="sm" />
          </q-item-section>
          <q-item-section class="text-h6">Рекомендации</q-item-section>
        </q-item>
        <q-item to="/settings" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="settings" size="sm" />
          </q-item-section>
          <q-item-section class="text-h6">Настройки</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>

    <q-footer
      v-if="!$route.path.includes('messages_id')"
      style="border-top: 1px solid #00000042"
      class="bg-white text-black fixed-bottom"
    >
      <q-tabs
        indicator-color="transparent"
        active-color="blue"
        v-model="tab"
        class="bg-white"
      >
        <q-tab @click="onPage('/')" name="home" icon="home" />
        <q-tab @click="onPage('/search')" name="search" icon="search" />
        <q-tab
          @click="onPage('/notifications')"
          alert="purple"
          name="notifications_none"
          icon="notifications_none"
        />
        <q-tab
          @click="onPage('/messages')"
          alert="orange"
          name="mail_outline"
          icon="mail_outline"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, computed, onMounted } from "vue";

import { useQuasar } from "quasar";

import { useRouter, useRoute } from "vue-router";
export default {
  // onMounted(() => {
  //     Device.getInfo().then(info => {
  //       model.value = info.model
  //       manufacturer.value = info.manufacturer
  //     })
  //   }),

  setup() {
    const leftDrawerOpen = ref(false);
    const tab = ref("home");
    const router = useRouter();
    const route = useRoute();

    // const Statb = StatusBar

    const OnRoute = computed(
      () =>
        route.path.includes("comments") ||
        route.path.includes("status") ||
        route.path.includes("readable") ||
        route.path.includes("readers") ||
        route.path.includes("search") ||
        route.path.includes("messages_id")
    );
    const listRoutePath = ref(["/comments"]);
    //     onMounted(() => {

    // })
    return {
      route,
      OnRoute,
      router,
      tab,
      listRoutePath,
      leftDrawerOpen,
      onPage(url) {
        router.push({ path: url });
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

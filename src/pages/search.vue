<template>
  <q-page class="" padding>
    <q-select
      outlined
      bg-color="white"
      hide-dropdown-icon
      v-model="model"
      use-input
      input-debounce="0"
      label="Введите имя пользователя"
      :options="options"
      @filter="filterFn"
      behavior="dialog"
    >
      <template v-slot:append>
        <q-icon color="blue" name="search" />
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </q-page>
</template>

<script>
import { ref } from "vue";

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  name: "SearchPage",
  setup() {
    const options = ref(stringOptions);

    return {
      model: ref(null),
      stringOptions,
      options,

      filterFn(val, update) {
        if (val === "") {
          update(() => {
            options.value = stringOptions;
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
};
</script>

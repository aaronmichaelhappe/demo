<template>
  <label>{{ label }}</label>
  <div class="flex">
    <span
      v-for="(value, index) in values"
      :key="index"
      class="mr-2 inline-block"
    >
      <input
        type="radio"
        v-model="model"
        :value="value.value"
        :name="name"
        class="mr-1"
      />
      <label>{{ value.label ? value.label : value.value }}</label>
    </span>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  model: {
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  values: {
    type: Array,
    required: true,
  },
  styleOptions: {
    type: String,
    required: false,
    default: "",
  },
});

const model = ref(props.model);
let altStyles = ref("");

const styleLookup = {
  widthFull: "w-full",
  widthOneHalf: "w-1/2",
};

if (props.styleOptions !== "") {
  altStyles.value = props.styleOptions.map((o) =>
    styleLookup[o] !== undefined ? styleLookup[o] : ""
  );
}
</script>

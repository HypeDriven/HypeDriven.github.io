<template>
  <button class="bg-primary-button hover:bg-primary-button text-white font-bold py-3 px-6 rounded-lg">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  data: function () {
    return {};
  },
};
</script>

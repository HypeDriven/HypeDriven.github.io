<template>
  <button class="bg-primary-button hover:scale-110 ease-in duration-200 text-white font-bold py-3 p-8 rounded-3xl"> <!-- rounded-lg-->
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

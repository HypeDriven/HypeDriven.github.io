<template>
  <button type="button"
    class="w-10 h-10 text-white iconButton rounded-full hover:bg-primary-bg/[.1]">
    <slot class="m-auto"></slot>
  </button>
</template>

<script>
export default {
  name: "IconButtonComponent",
  data: function () {
    return {};
  },
};
</script>

<style>
.iconButton {
  background: rgba(232, 232, 255, 0.1);
  border: 1px solid rgba(232, 232, 255, 0.1);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
}
</style>

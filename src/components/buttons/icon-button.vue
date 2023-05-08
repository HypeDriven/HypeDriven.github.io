<template>
  <button type="button"
    class="w-10 h-10 xxs:w-12 xxs:h-12 text-white iconButton rounded-full">
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
  background: #00007E;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
}

.iconButton:hover {
  transition: .4s;
  scale: 1.2;
}
</style>

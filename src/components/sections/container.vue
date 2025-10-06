<template>
  <section class="sm:px-2 sm:py-2 md:py-8 md:px-16 lg:px-28 lg:py-16 xl:px-28 4xl:px-52 5xl:px-64 6xl:px-80 7xl:px-96 w-full flex flex-col gap-14">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "SectionContainerComponent",
    data: function() {
    return {
    };
  }
};
</script>

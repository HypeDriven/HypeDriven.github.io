<template>
    <Header2>
        <slot></slot>
    </Header2>
</template>

<script>
import Header2 from "../text/header/header_2.vue";
export default {
    name: "TitleComponent",
    components: {
        Header2
    },
    data: function () {
        return {

        };
    }
};
</script>

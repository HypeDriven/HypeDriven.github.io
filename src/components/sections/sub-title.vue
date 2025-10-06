<template>
    <Header3>
        <slot></slot>
    </Header3>
</template>

<script>
import Header3 from "../text/header/header_3.vue";
export default {
    name: "SubTitleComponent",
    components: {
        Header3
    },
    data: function () {
        return {

        };
    }
};
</script>

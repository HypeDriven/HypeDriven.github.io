<template>
    <div @click="complete()">
        <slide-unlock ref="slideunlockref2" class="rotate-90 slide2" :auto-width="false" :circle="true" :disabled="false"
            :noanimate="false" :width="60" :height="30" text="" success-text="" @completed="complete()" />
    </div>
</template>

<script>
import SlideUnlock from "vue-slide-unlock"

export default {
    components: {
        SlideUnlock
    },
    methods: {
        complete() {
            console.log("completed");
        },
        reset() {
            this.$refs.slideunlockref2.reset();
        }
    }
}
</script>

<style scoped>
.slide2 {
    --su-color-bg: trasparent !important;
    --su-color-progress-normal-bg: #000026 !important;
    --su-color-progress-complete-bg: #000026 !important;
    --su-color-text-normal: #000026 !important;
    --su-color-text-complete: #000026 !important;
    --su-color-handler-bg: #ffffff !important;
    --su-color-handler: none !important;
}

.slideunlock.is-circle {
    border: 2px solid #ffffff !important;
}

.slideunlock.is-complete .slideunlock-handler {
    background: var(--su-color-handler-bg);
    opacity: 1;
}
</style>
<template>
        <div v-for="(itemdata, index) in items" :key="index">
            <slot :data="itemdata"></slot>
        </div>
</template>

<script>


export default {
    name: 'TestComponent',
    components: {
    },
    props: ['items']
}
</script>

<style>
</style>
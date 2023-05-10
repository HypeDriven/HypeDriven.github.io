<template>
    <div class="flex running-elements">
        <div v-for="(text, i) in content" :key="i" class="flex w-full">
            <img :src="img"/>
            <h1 class="text-[#ffffff] h-fit m-auto text-3xl">
                {{ $t(`${text}`) }}
            </h1>
        </div>
        <img :src="img"/>
    </div>
</template>

<script>
export default {
    name: "RunningLineComponent",
    props: {
        img: {
            type: String
        },
        content: {
            type: Array
        }
    },
    data: function () {
        return {
        };
    }
}
</script>

<style>
.running-elements {
    animation: runningline 8s infinite linear;
}
@keyframes runningline {
  0%{
    transform: translateX(100%);
  }
  
  100%{
    transform: translateX(-100%);
  }
}
</style>
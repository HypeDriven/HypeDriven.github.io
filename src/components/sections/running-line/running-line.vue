<template>
    <div class="flex running-elements">
        <div v-for="(text, i) in content" :key="i" class="flex w-full">
            <img :src="img" class="xs:w-[20px] xxs:w-[10px]"/>
            <h1 class="text-[#ffffff] h-fit m-auto xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl xs:text-xl xxs:text-xl">
                {{ $t(`${text}`) }}
            </h1>
        </div>
        <img :src="img" class="xs:w-[20px] xxs:w-[10px]"/>
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
<template>
    <div class="flex running-elements">
        <img :src="img"/>
        <h1 class="text-[#ffffff] h-fit m-auto text-3xl">
            {{ $t(`${text1}`) }}
        </h1>
        <img :src="img"/>
        <h1 class="text-[#ffffff] h-fit m-auto text-3xl">
            {{ $t(`${text2}`) }}
        </h1>
        <img :src="img"/>
        <h1 class="text-[#ffffff] h-fit m-auto text-3xl">
            {{ $t(`${text3}`) }}
        </h1>
        <img :src="img"/>
        <h1 class="text-[#ffffff] h-fit m-auto text-3xl">
            {{ $t(`${text4}`) }}
        </h1>
        <img :src="img"/>
    </div>
</template>

<script>
export default {
    name: "RunningLineComponent",
    props: ['img', 'text1', 'text2', 'text3', 'text4'],
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
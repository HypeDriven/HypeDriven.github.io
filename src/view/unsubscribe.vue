<template>
    <div>
        <div class="flex flex-col ">
            <Header />
            <Hero class="flex-1" />
        </div>
        <main class="">
            <!-- <CauseOfUnsubscribe/> -->
            <Unsubscribe/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
// import CauseOfUnsubscribe from "../components/sections/unsubscribe-page/cause-of-unsubscribe.vue";
import Unsubscribe from "../components/sections/unsubscribe-page/unsubscribe.vue";

export default {
    name: "UnsubscribePage",
    components: {
        Header,
        Footer,
        Unsubscribe,
        // CauseOfUnsubscribe
    }
}
</script>
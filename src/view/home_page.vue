<template>
  <div>
    <div class="flex flex-col h-screen">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col gap-2">
      <Section class="flex-col gap-6 bg-white">
        <div class="text-black h-fit m-auto text-4xl max-w-xl px-2 text-center">
          Lorem Ipsum is simply dummy.
        </div>
        <div class="text-black h-fit m-auto text-2xl max-w-3xl px-2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </div>
        <div class="flex">
          <Button class="mx-auto" />
        </div>
      </Section>
      <Section class="flex-col gap-6 bg-gray-body">
        <div class="text-black h-fit m-auto text-4xl max-w-xl px-2 text-center">
          Lorem Ipsum is simply dummy.
        </div>
        <div class="text-black h-fit m-auto text-2xl max-w-3xl px-2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </div>
      </Section>
    </main>
  </div>
</template>

<script>
import Header from "../components/header";
import Hero from "../components/hero";
import Section from "../components/sections";
import Button from "../components/buttons";
export default {
  name: "HomePage",
  components: {
    Header,
    Hero,
    Section,
    Button,
  },
};
</script>

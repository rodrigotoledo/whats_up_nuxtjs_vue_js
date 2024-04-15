<template>
  <div class="bg-[#0c1317] w-full justify-center flex">
    <div class="2xl:w-[1700px] 2xl:p-6 w-full h-screen">
      <main class="flex w-full items-center h-full">
        <div class="w-[30%] border-0 border-r-[1px] border-[#2f3b43] h-screen">
          <Left />
        </div>
        <div class="w-[70%]">
          <nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Left from "../components/Left.vue";

export default {
  name: 'DefaultLayout',
  components: {
    Left
  }
}
</script>

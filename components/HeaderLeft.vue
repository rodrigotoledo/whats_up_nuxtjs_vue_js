<template>
  <div class="flex w-full top-0 z-10 bg-[#202c33]">
    <div class="flex w-full items-center">
      <div class="w-full border-0 border-r-[1px] border-[#2f3b43] px-2">
        <div class="p-2 flex justify-between">
          <img src="https://random.imagecdn.app/100/100" alt="" class="rounded-full w-10 " />

          <div class="flex items-center space-x-6">
            <VolumePlus  class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
            <AccountGroupIcon  class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
            <CircleBox  class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
            <CommentArrowRight  class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
            <MessageText  class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
            <DotsVerticalIcon  class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- <header class="whatsapp-header p-4 flex items-center justify-between shadow-md">
    <div class="flex items-center space-x-4">
      <img src="/whatsapp-logo.png" alt="WhatsApp Logo" class="h-8">
      <h1 class="text-white font-semibold text-lg">WhatsApp</h1>
    </div>
    <div class="flex items-center space-x-4">
      <button class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a7 7 0 1114 0 7 7 0 01-14 0zm15.072-6.071a1 1 0 00-1.414 0L15 5.586l-1.072-1.071a1 1 0 00-1.414 1.414L13.586 7l-1.072 1.072a1 1 0 001.414 1.414L15 8.414l1.072 1.072a1 1 0 001.414-1.414L16.414 7l1.072-1.072a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <button class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a7 7 0 1114 0 7 7 0 01-14 0zm15.072-6.071a1 1 0 00-1.414 0L15 5.586l-1.072-1.071a1 1 0 00-1.414 1.414L13.586 7l-1.072 1.072a1 1 0 001.414 1.414L15 8.414l1.072 1.072a1 1 0 001.414-1.414L16.414 7l1.072-1.072a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <button class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a7 7 0 1114 0 7 7 0 01-14 0zm15.072-6.071a1 1 0 00-1.414 0L15 5.586l-1.072-1.071a1 1 0 00-1.414 1.414L13.586 7l-1.072 1.072a1 1 0 001.414 1.414L15 8.414l1.072 1.072a1 1 0 001.414-1.414L16.414 7l1.072-1.072a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </header> -->
</template>

<script setup>

import VolumePlus from 'vue-material-design-icons/VolumePlus.vue'
import MessageText from 'vue-material-design-icons/MessageText.vue'
import AccountGroupIcon from 'vue-material-design-icons/AccountGroup.vue'
import CircleBox from 'vue-material-design-icons/CircleBox.vue'
import CommentArrowRight from 'vue-material-design-icons/CommentArrowRight.vue'
import TextSearch from 'vue-material-design-icons/TextSearch.vue'
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
</script>

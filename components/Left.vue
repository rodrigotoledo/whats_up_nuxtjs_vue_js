<template>

  <div class="flex h-full flex-col bg-[#111b21]">
    <HeaderLeft />
    <div class="w-full flex items-center mt-2 ">
      <div class="bg-[#202c33] w-full px-2 flex items-center py-2 rounded-lg">
        <TextSearch class="rounded-full mr-4 cursor-pointer bg-transparent text-[#a0acb3]" />
        <input type="text" class="bg-transparent w-full border-0 text-[#a0acb3]" placeholder="pesquisar" />
      </div>
      <FilterMenu class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
    </div>
    <div class="overflow-y-auto h-full w-full py-2 my-1 flex flex-col">
      <div class="flex flex-column py-2 my-1 cursor-pointer">
        <div class="w-20 flex items-center justify-center">
          <ArchiveArrowDown class="rounded-full cursor-pointer bg-transparent text-[#005c4b] mr-2" />
        </div>
        <div class="border-0 border-b-[1px] border-[#202C33] text-white w-full flex items-end py-2">Arquivadas</div>
      </div>
      <div v-for="conversation in conversations" :key="conversation.id" @click="goToConversation(conversation.id)" class="w-full flex flex-row hover:bg-[#2a3942] cursor-pointer">
        <div class="w-20 flex items-center justify-center">
          <img src="https://random.imagecdn.app/100/100" alt="" class="rounded-full w-10 h-10" />
        </div>
        <div class="border-0 border-b-[1px] border-[#202C33] text-white w-full flex items-end">
          <div class="flex flex-row w-full justify-between py-2">
            <div class="flex flex-col">
              <p v-if="conversation.sender_id === current_user_id">
                {{ conversation.receiver.name }}
              </p>
              <p v-else>
                {{ conversation.sender.name }}
              </p>
              <p class="text-sm font-bold">{{ $truncateString(conversation.last_message.content, 44) }}</p>
            </div>
            <div class="flex items-center">
              <div class="flex flex-col items-center justify-center">
                <p class="text-sm">{{ conversation.last_message.created_at | formatTime }}</p>
                <ArrowCollapseDown class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderLeft from "./HeaderLeft.vue";

  export default {
    components: {
      HeaderLeft
    },
    data() {
      return {
        current_user_id: 1,
        conversations: []
      };
    },
    async created() {
      const response = await fetch(`${process.env.BASE_URL}/conversations`)
      const data = await response.json();
      this.conversations = data;
    },
    methods: {
      goToConversation(conversationId) {
        this.$router.push({ path: '/', query: { conversation_id: conversationId } });
      },
    }
  }
</script>

<script setup>
  import TextSearch from 'vue-material-design-icons/TextSearch.vue'
  import FilterMenu from 'vue-material-design-icons/FilterMenu.vue'
  import ArchiveArrowDown from 'vue-material-design-icons/ArchiveArrowDown.vue'
  import ArrowCollapseDown from 'vue-material-design-icons/ArrowCollapseDown.vue'
</script>

<style scoped>

textarea:focus, input:focus{
  outline: none;
}
/* Estilos específicos para a barra de rolagem */
::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */

}

/* Estilo do rastreador da barra de rolagem */
::-webkit-scrollbar-track {
  background: #111b21; /* Cor de fundo do rastreador */
}

/* Estilo do thumb (ponteiro) da barra de rolagem */
::-webkit-scrollbar-thumb {
  background: #636363; /* Cor do thumb */
  border-radius: 5px; /* Borda arredondada do thumb */
}

/* Mudança de cor do thumb quando estiver hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Cor do thumb em hover */
}
</style>

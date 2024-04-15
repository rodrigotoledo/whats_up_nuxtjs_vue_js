<template>
  <div class="h-screen flex flex-col">
    <!-- Cabeçalho -->
    <div class="bg-[#111b21] text-white py-4 px-8">Cabeçalho</div>

    <!-- Conteúdo rolável -->
    <div class="flex flex-col h-full overflow-y-auto bg-gray-900 p-4 w-full" ref="messagesContainer">
      <!-- Lista de mensagens -->
      <div v-for="(message, index) in messages" :key="index" class="flex mb-4 w-full">
        <div v-if="message.sender_id === currentUserId" class="flex flex-col items-end w-full">
          <div class="bg-[#005c4b] text-white p-2 rounded-lg max-w-[70%]">{{ message.content }}</div>
          <span class="text-gray-300 text-sm mt-1">{{ message.created_at | formatTime }}</span>
        </div>
        <div v-else class="flex flex-col items-start w-full">
          <div class="bg-gray-700 text-white p-2 rounded-lg max-w-[70%]">{{ message.content }}</div>
          <span class="text-gray-300 text-sm mt-1">{{ message.created_at | formatTime }}</span>
        </div>
      </div>
    </div>

    <!-- Rodapé -->
    <div class="bg-[#202c33] text-white py-4 px-8 flex flex-row items-center justify-between w-full">
      <div class="flex flex-row space-x-2">
        <EmoticonHappy class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
        <Plus class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
      </div>
      <input type="text" class="bg-[#2a3942] flex-1 mx-2 py-2 px-4 rounded-md" placeholder="Digite uma mensagem" />
      <Microphone class="rounded-full cursor-pointer bg-transparent text-[#a0acb3]" />
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        currentUserId: 1,
        messages: [
        ]
      };
    },
    async fetch() {
      if (!this.$route.query.conversation_id) {
        return;
      }
      const conversationId = this.$route.query.conversation_id;
      const response = await fetch(`${process.env.BASE_URL}/messages?conversation_id=${conversationId}`);
      const data = await response.json();
      this.messages = data;
    },
    watch: {
      '$route'() {
        this.$fetch();
        this.scrollToBottom();
      }
    },
    mounted() {
      this.scrollToBottom();
    },
    key: '$route.query.conversation_id',
    methods: {
      scrollToBottom() {
        const messagesContainer = this.$refs.messagesContainer;
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }
    }
  };
</script>

<script setup>
  import EmoticonHappy from 'vue-material-design-icons/EmoticonHappy.vue'
  import Plus from 'vue-material-design-icons/Plus.vue'
  import Microphone from 'vue-material-design-icons/Microphone.vue'
</script>
<style scoped>
/* Estilos específicos para a barra de rolagem */
::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */
}

/* Estilo do rastreador da barra de rolagem */
::-webkit-scrollbar-track {
  background: #323a3f; /* Cor de fundo do rastreador */
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

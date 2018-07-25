
<template>
  
      <v-layout row wrap>
          <v-flex md3>
              <available-rooms></available-rooms>
          </v-flex>
          <v-flex md8>
             <chat-panel></Chat-panel>
          </v-flex>
      </v-layout>
</template>

<script>
import AvailableRooms from './module/availableRooms.vue'
import ChatPanel from './module/chatPanel.vue'
  export default {
      components : {
          'available-rooms' : AvailableRooms,
          'chat-panel' : ChatPanel
      }
  }
</script>
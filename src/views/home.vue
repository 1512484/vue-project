<template>
  <div class="flex flex-col overflow-auto home-view">
    <server-select class="mb-4" />
    <game-select />
  </div>
</template>

<script setup>
import ServerSelect from "@/components/home/ServerSelect.vue";
import GameSelect from "@/components/home/GameSelect.vue";
</script>

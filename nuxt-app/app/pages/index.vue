<script setup lang="ts">
import { useAccount } from "@wagmi/vue";

const { isConnected } = useAccount();
</script>

<template>
  <UContainer>
    <div class="flex flex-col gap-2 items-center justify-center h-screen">
      <Account v-if="isConnected" />
      <Connect v-else />
      <Chains />
    </div>
  </UContainer>
</template>

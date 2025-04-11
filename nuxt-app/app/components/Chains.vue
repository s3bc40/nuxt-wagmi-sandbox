<script setup lang="ts">
import { useSwitchChain } from "@wagmi/vue";
import { useChainId } from "@wagmi/vue";

const chainId = useChainId();
const { chains, switchChain } = useSwitchChain();
</script>

<template>
  <div>
    <UButton
      v-for="chain in chains"
      :key="chain.id"
      @click="switchChain({ chainId: chain.id })"
    >
      {{ chain.name }}
    </UButton>
    <div>Current chainId: {{ chainId.toString() }}</div>
  </div>
</template>
